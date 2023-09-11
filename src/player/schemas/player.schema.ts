import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Team } from '../../team/schemas/team.schema';

enum PlayerPosition {
  Forward = 'Forward',
  Midfielder = 'Midfielder',
  Defender = 'Defender',
  Goalkeeper = 'Goalkeeper',
  // Add more positions as needed
}

@Schema()
export class Player extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: PlayerPosition })
  position: PlayerPosition;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true })
  team: Team; // Reference to the team the player belongs to

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ default: 0 })
  gameweekPoints: number; // Points scored by the player in the current gameweek

  @Prop({ default: 0 })
  totalPoints: number; // Total points scored by the player

  @Prop({ default: 0 })
  price: number; // Price of the player for fantasy team selection

  @Prop({ default: 0 })
  goalsInGameweek: number; // Goals scored by the player in the current gameweek

  @Prop({ default: 0 })
  totalGoals: number; // Total goals scored by the player

  @Prop({ default: 0 })
  assistsInGameweek: number; // Assists made by the player in the current gameweek

  @Prop({ default: 0 })
  totalAssists: number; // Total assists made by the player
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
