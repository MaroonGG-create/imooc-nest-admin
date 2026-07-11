import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { Repository } from 'typeorm';
// import { CreateUserDto } from './create-user.dto';
// import { MENU_LIST } from './menu.data';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  findAll() {
    //return MENU_LIST;
    // return this.menuRepository.findBy({ active: 1 });
    const QUERY_ALL_SQL = `SELECT * FROM menu  order by id asc`;
    return this.menuRepository.query(QUERY_ALL_SQL);
  }
  findActive() {
    //return MENU_LIST;
    // return this.menuRepository.findBy({ active: 1 });
    const QUERY_ALL_SQL = `SELECT * FROM menu WHERE active = 1 order by id asc`;
    return this.menuRepository.query(QUERY_ALL_SQL);
  }
}
