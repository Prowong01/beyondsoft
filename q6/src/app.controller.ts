import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UtilsService } from './utils/utils.service';
import { IsNumber } from 'class-validator';

class TestDto {
  @IsNumber()
  num: number;
}

@Controller()
export class AppController {
  constructor(private readonly utilsService: UtilsService) {}

  @Post('/api/test')
  @UsePipes(new ValidationPipe())
  test(@Body() body: TestDto) {
    const result = this.utilsService.double(body.num);
    return { result };
  }
}
