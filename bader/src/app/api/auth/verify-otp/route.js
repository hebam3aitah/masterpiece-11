// /app/api/auth/verify-otp/route.js
import connectDB from '@/lib/connectDb';
import User from '@/models/User';

export async function POST(req) {
  try {
    const { email, otp } = await req.json();
    await connectDB();
    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ message: 'البريد غير موجود' }, { status: 404 });
    }

    if (user.otpCode !== Number(otp)) {
      return Response.json({ message: 'رمز التحقق غير صحيح' }, { status: 400 });
    }

    // Optionally check if expired
    // if (user.otpExpires < Date.now()) return Response.json({ message: 'انتهت صلاحية الرمز' }, { status: 410 });

    user.IsConfirmed = true;
    user.otpCode = null;
    await user.save();

    return Response.json({ message: 'تم تأكيد البريد الإلكتروني بنجاح' });
  } catch (error) {
    console.error('OTP Verify Error:', error);
    return Response.json({ message: 'حدث خطأ أثناء التحقق' }, { status: 500 });
  }
}
