import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Res } from './app.helper';
import { ReqDTO } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getWordsCombinations(@Body() req: ReqDTO): Res {
    return this.appService.getWordsCombinations(req.text);
  }
}
