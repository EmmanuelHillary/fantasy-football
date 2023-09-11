import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { League } from '../../league/schemas/league.schema';

@Schema()
export class Gameweek extends Document {
  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true })
  league: League; // Reference to the league this gameweek belongs to
}

export const GameweekSchema = SchemaFactory.createForClass(Gameweek);
