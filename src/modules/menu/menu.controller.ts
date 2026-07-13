import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Put,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { error, wrapperResponse } from '../../utils';
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
    return wrapperResponse(this.menuService.findAll(), '获取菜单成功');
  }

  @Post('create')
  createMenu(@Body() body: any) {
    console.log('body', body);
    return wrapperResponse(this.menuService.createMenu(body), '创建菜单成功');
  }
  @Put('update')
  async updateMenu(@Body() body: any) {
    return wrapperResponse(this.menuService.updateMenu(body), '修改菜单成功');
    // try {
    //   return await 
    // } catch (err) {
    //   const message = err instanceof Error ? err.message : '请求失败';
    //   return error(message);
    // }
  }

  @Delete('/:id')
  removeMenu(@Param('id', ParseIntPipe) id: number) {
    // return this.userService.remove(id);
  }
}
