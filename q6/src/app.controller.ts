import { Body, Controller, Post } from '@nestjs/common';
import { UtilsService } from './utils/utils.service';
import { IsNumber } from 'class-validator';

class DoubleDto {
  @IsNumber()
  num: number;
}

@Controller('/api')
export class AppController {
  constructor(private readonly utilsService: UtilsService) {}

  @Post('test')
  testDouble(@Body() body: DoubleDto): { result: number } {
    const result = this.utilsService.double(body.num);
    return { result };
  }
}
