import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameweekService } from './gameweek.service';
import { CreateGameweekDto } from './dto/create-gameweek.dto';
import { UpdateGameweekDto } from './dto/update-gameweek.dto';

@Controller('gameweek')
export class GameweekController {
  constructor(private readonly gameweekService: GameweekService) {}

  @Post()
  create(@Body() createGameweekDto: CreateGameweekDto) {
    return this.gameweekService.create(createGameweekDto);
  }

  @Get()
  findAll() {
    return this.gameweekService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameweekService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameweekDto: UpdateGameweekDto) {
    return this.gameweekService.update(+id, updateGameweekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameweekService.remove(+id);
  }
}
