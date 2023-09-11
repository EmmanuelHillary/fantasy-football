import { Test, TestingModule } from '@nestjs/testing';
import { GameweekController } from './gameweek.controller';
import { GameweekService } from './gameweek.service';

describe('GameweekController', () => {
  let controller: GameweekController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameweekController],
      providers: [GameweekService],
    }).compile();

    controller = module.get<GameweekController>(GameweekController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
