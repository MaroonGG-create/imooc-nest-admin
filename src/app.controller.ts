import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './exception/http-exception.filter';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/data')
  @UseFilters(new HttpExceptionFilter())
  getHPostello(@Body() data: any): string {
    throw new HttpException('我故意报错', 400);
    console.log('data', data);
    return 'nihao' + JSON.stringify(data);
  }
}
