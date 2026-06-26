import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id, id);
    return `This is user controller for user with ID: ${id}`;
  }
}
