import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ UtilsService],
})
export class AppModule {}
