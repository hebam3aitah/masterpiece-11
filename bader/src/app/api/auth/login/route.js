import connectDB from '@/lib/connectDb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ message: 'البريد الإلكتروني غير مسجل' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Response.json({ message: 'كلمة المرور غير صحيحة' }, { status: 401 });
    }

    // ⛔ Check if email not confirmed
    if (!user.IsConfirmed) {
      return Response.json({
        message: 'يجب تأكيد البريد الإلكتروني أولاً',
        unconfirmed: true,
        email: user.email,
      }, { status: 403 });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    return Response.json({
      message: 'تم تسجيل الدخول بنجاح',
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (err) {
    console.error('Login Error:', err);
    return Response.json({ message: 'حدث خطأ أثناء تسجيل الدخول' }, { status: 500 });
  }
}
