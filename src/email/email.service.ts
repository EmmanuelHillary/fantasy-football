import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import ejs from 'ejs';
import path from 'path';

@Injectable()
export class EmailService {
  private transporter = createTransport({
    service: 'Gmail',
    auth: {
      user: 'your.email@gmail.com',
      pass: 'your-email-password',
    },
  });

  async sendOTP(email: string, otp: number) {
    const renderedHTML = await ejs.renderFile(
      path.join(__dirname, 'templates', 'otp-template.ejs'),
      { otp },
    );

    const mailOptions = {
      from: 'your.email@gmail.com',
      to: email,
      subject: 'OTP Verification',
      html: renderedHTML,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
