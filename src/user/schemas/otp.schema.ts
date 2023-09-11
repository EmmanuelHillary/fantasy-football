import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Otp extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  otp: number;

  @Prop({ required: true })
  expirationTime: Date;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);
