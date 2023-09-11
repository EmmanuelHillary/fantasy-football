import { Injectable } from '@nestjs/common';
import { CreateGameweekDto } from './dto/create-gameweek.dto';
import { UpdateGameweekDto } from './dto/update-gameweek.dto';

@Injectable()
export class GameweekService {
  create(createGameweekDto: CreateGameweekDto) {
    return 'This action adds a new gameweek';
  }

  findAll() {
    return `This action returns all gameweek`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameweek`;
  }

  update(id: number, updateGameweekDto: UpdateGameweekDto) {
    return `This action updates a #${id} gameweek`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameweek`;
  }
}
