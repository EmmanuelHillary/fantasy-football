import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { League } from '../../league/schemas/league.schema';
import { Player } from '../../player/schemas/player.schema';
import { User } from '../../user/schemas/user.schema';

enum FantasyLeagueType {
  FivePlayersOneKeeper = '5_players_1_keeper',
  TenPlayersOneKeeper = '10_players_1_keeper',
}

@Schema()
export class FantasyTeam extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  owner: User; // User who owns this fantasy team

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true })
  league: League; // League to which this fantasy team belongs

  @Prop({ enum: FantasyLeagueType })
  leagueType: FantasyLeagueType; // Type of league for this fantasy team

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] })
  players: Player[]; // Players included in this fantasy team

  @Prop({ default: 0 })
  budget: number; // Budget available for buying players (in millions)

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] })
  substitutes: Player[]; // Substitutes for the fantasy team

  @Prop({ default: 0 })
  gameweekPoints: number; // Points scored by the fantasy team in the current gameweek

  @Prop({ default: 0 })
  totalPoints: number; // Total points scored by the fantasy team

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Player' })
  captain: Player;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Player' })
  viceCaptain: Player;
}

export const FantasyTeamSchema = SchemaFactory.createForClass(FantasyTeam);
