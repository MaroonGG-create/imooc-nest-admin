import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Menu } from './menu.entity';
// import { DeleteResult, Repository } from 'typeorm';
// import { CreateUserDto } from './create-user.dto';
import { MENU_LIST } from './menu.data';
@Injectable()
export class MenuService {
  // constructor(
  //   @InjectRepository(Menu)
  //   private readonly menuRepository: Repository<Menu>,
  // ) {}

  findAll() {
    return MENU_LIST;
  }
}
