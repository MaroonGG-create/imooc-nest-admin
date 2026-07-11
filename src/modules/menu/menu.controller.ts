import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { wrapperResponse } from '../../utils';
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('active')
  getActiveMenu() {
    return wrapperResponse(this.menuService.findActive(),'获取菜单成功');
  }
  @Get('info')
  getUserByToken(@Req() request: any) {
    // return wrapperResponse(
    //   this.userService.findByUsername(request.user.username),
    //   '获取用户信息成功',
    // );
  }
  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    // return this.userService.findOne(id);
  }

  @Get()
  getAllMenu() {
    return wrapperResponse(this.menuService.findAll(),'获取菜单成功');
  }

  @Post()
  createMenu(@Body() body: any) {
    // console.log(body);
    // return this.userService.createUser(body);
  }

  @Delete('/:id')
  removeMenu(@Param('id', ParseIntPipe) id: number) {
    // return this.userService.remove(id);
  }
}
