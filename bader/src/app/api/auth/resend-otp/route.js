import connectDB from '@/lib/connectDb';
import User from '@/models/User';
import { sendOtpEmail } from '@/lib/mail/sendOtpEmail'; // ✅ make sure this import is correct

export async function POST(req) {
  try {
    const { email } = await req.json();
    await connectDB();
    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ message: 'المستخدم غير موجود' }, { status: 404 });
    }

    const otp = Math.floor(1000 + Math.random() * 9000);
    user.otpCode = otp;
    await user.save();

    await sendOtpEmail(user.email, otp); // ✅ THIS sends the email

    return Response.json({ message: 'تم إرسال رمز تحقق جديد إلى بريدك الإلكتروني' });
  } catch (error) {
    console.error('❌ Resend OTP Error:', error); // LOG THE FULL ERROR
    return Response.json({ message: 'فشل في إرسال رمز التحقق' }, { status: 500 });
  }
}
