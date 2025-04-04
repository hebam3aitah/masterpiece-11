import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectToDatabase from '../../../lib/connectDb';
import User from '../../../models/User';

// تسجيل حساب جديد
export async function POST(req) {
  await connectToDatabase();
  
  const { name, email, password } = await req.json();
  
  // تحقق إذا كان المستخدم موجودًا
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response('البريد الإلكتروني مسجل بالفعل', { status: 400 });
  }

  // تشفير كلمة السر
  const hashedPassword = await bcrypt.hash(password, 10);

  // إنشاء مستخدم جديد
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  return new Response(JSON.stringify({ message: 'تم التسجيل بنجاح' }), { status: 201 });
}

// تسجيل الدخول
export async function POST_LOGIN(req) {
  await connectToDatabase();

  const { email, password } = await req.json();

  // البحث عن المستخدم
  const user = await User.findOne({ email });
  if (!user) {
    return new Response('البريد الإلكتروني غير موجود', { status: 404 });
  }

  // التحقق من كلمة السر
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response('كلمة السر غير صحيحة', { status: 401 });
  }

  // إنشاء JWT
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );


  // تعيين الـ token في الكوكيز
  const cookie = serialize('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // في البيئة الإنتاجية فقط
    maxAge: 3600, // الكوكي سيظل صالحاً لمدة ساعة
    path: '/',
  });

  return new Response(JSON.stringify({ message: 'تم تسجيل الدخول بنجاح' }), {
    status: 200,
    headers: {
      'Set-Cookie': cookie, // تعيين الكوكي مع الـ token
    },
  });

  return new Response(JSON.stringify({ token }), { status: 200 });
}
