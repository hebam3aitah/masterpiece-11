import nodemailer from 'nodemailer';

export async function sendOtpEmail(to, otp) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Bader App" <${process.env.SMTP_EMAIL}>`,
    to,
    subject: 'رمز التحقق من البريد الإلكتروني',
    html: `
      <div style="font-family: Arial, sans-serif; text-align: right;">
        <h2>رمز التحقق الخاص بك</h2>
        <p>رمز التحقق الخاص بك هو:</p>
        <h1 style="letter-spacing: 5px; color: #31124b;">${otp}</h1>
        <p>يرجى إدخال هذا الرمز لتأكيد بريدك الإلكتروني.</p>
        <p>هذا الرمز صالح لمدة 10 دقائق فقط.</p>
        <hr />
        <p style="font-size: 12px; color: gray;">إذا لم تطلب هذا الرمز، تجاهل هذه الرسالة.</p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('📬 Email sent:', info.messageId);
  console.log('🔗 Preview URL:', nodemailer.getTestMessageUrl(info));
}
