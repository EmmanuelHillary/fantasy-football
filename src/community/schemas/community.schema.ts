import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { League } from '../../league/schemas/league.schema';
import { User } from '../../user/schemas/user.schema';

@Schema()
export class Community extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: Date.now })
  created: Date; // Date when the community was created

  @Prop({ required: true })
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  members: User[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'League' }] })
  leagues: League[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  admins: User[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;

  @Prop()
  icon: string;
}

export const CommunitySchema = SchemaFactory.createForClass(Community);
