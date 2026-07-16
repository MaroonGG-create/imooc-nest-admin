import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { wrapperCountResponse } from '../../utils';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('')
  getBookList(@Query() Body) {
    console.log(Body);
    return wrapperCountResponse(
      this.bookService.getBookList(Body),
      this.bookService.countBookList(Body),
      '获取图书列表成功',
    );
  }
  // @Get('/:id')
  // getBook(@Param('id', ParseIntPipe) id: number) {
  //   return this.bookService.findAll();
  // }
}
