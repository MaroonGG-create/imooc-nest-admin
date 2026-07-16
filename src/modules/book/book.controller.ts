import {
  Body,
  Controller,
  Get,
  ParseFilePipeBuilder,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BookService } from './book.service';
import { wrapperCountResponse, wrapperResponse } from '../../utils';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Express } from 'express';
import * as fs from 'fs';
import * as path from 'path';
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

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /epub/,
        })
        .build(),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);
    const desDir = 'D:/谷歌下载/nginx-1.28.3/nginx-1.28.3/html/upload';
    const destPath = path.resolve(desDir, file.originalname);
    fs.writeFileSync(destPath, file.buffer);
    return wrapperResponse(
      Promise.resolve().then(() => ({
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        path: destPath,
        dir:desDir,
      })),
      '文件上传成功',
    );
  }
  // @Get('/:id')
  // getBook(@Param('id', ParseIntPipe) id: number) {
  //   return this.bookService.findAll();
  // }
}
