import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { League } from 'src/league/schemas/league.schema';
import { Player } from 'src/player/schemas/player.schema';
import { User } from 'src/user/schemas/user.schema';

@Schema()
export class Team extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  createdBy: User; // User who created this team

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true })
  league: League; // League to which this team belongs

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] })
  players: Player[]; // Players included in this team

  @Prop({ required: true, default: Date.now })
  created: Date; // Date when the team was created

  @Prop({ required: true })
  description: string;

  @Prop()
  icon: string;

  @Prop({ default: 0 })
  matchesPlayed: number;

  @Prop({ default: 0 })
  gamesWon: number;

  @Prop({ default: 0 })
  gamesDrawn: number;

  @Prop({ default: 0 })
  gamesLost: number;

  @Prop({ default: 0 })
  goalsFor: number;

  @Prop({ default: 0 })
  goalsAgainst: number;

  @Prop({ default: 0 })
  points: number;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
