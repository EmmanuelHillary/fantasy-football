import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Community } from '../../community/schemas/community.schema';
import { FantasyTeam } from '../../fantasy_team/schemas/fantasy_team.schema';
import { League } from '../../league/schemas/league.schema';

@Schema({ toJSON: { virtuals: true, transform: hidePassword } })
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }] })
  communities: Community[]; // Communities the user is a member of

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'League' }] })
  leagues: League[]; // Leagues the user is a part of

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FantasyTeam' }],
  })
  fantasyTeams: FantasyTeam[]; // Fantasy teams created by the user

  @Prop()
  roles: string[]; // User roles (e.g., 'admin', 'user')

  @Prop()
  profilePicture: string; // URL of the user's profile picture

  @Prop()
  bio: string; // User's bio or description

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }] })
  adminCommunities: Community[]; // Communities where the user is an admin

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'League' }] })
  adminLeagues: League[]; // Leagues where the user is an admin

  @Prop({ required: true, default: Date.now })
  created: Date; // Date when the user was created

  @Prop({ default: false })
  verified: boolean;
}

function hidePassword(doc, ret) {
  delete ret.password;
  return ret;
}

export const UserSchema = SchemaFactory.createForClass(User);
