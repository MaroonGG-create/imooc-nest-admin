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
  createMenu(body: any) {
    return this.menuRepository.save(body?.data || body);
  }
  async updateMenu(body: any) {
    const data = body?.data || body || {};

    const id = Number(data.id);

    if (!Number.isInteger(id) || id <= 0) {
      throw new Error('菜单 id 不能为空');
    }

    const currentMenu = await this.menuRepository.findOneBy({ id });

    if (!currentMenu) {
      throw new Error('菜单不存在');
    }

    const updateData: Partial<Menu> = {};

    if (data.path !== undefined) {
      updateData.path = String(data.path).trim();
    }

    if (data.name !== undefined) {
      updateData.name = String(data.name).trim();
    }

    if (data.redirect !== undefined) {
      updateData.redirect = String(data.redirect);
    }

    if (data.meta !== undefined) {
      updateData.meta = this.normalizeMeta(data.meta);
    }

    if (data.pid !== undefined) {
      updateData.pid = this.normalizeNumber(data.pid, 'pid');
    }

    if (data.active !== undefined) {
      updateData.active = this.normalizeNumber(data.active, 'active');
    }

    if (Object.keys(updateData).length === 0) {
      throw new Error('没有需要更新的菜单字段');
    }

    if (updateData.name) {
      const sameNameMenu = await this.menuRepository.findOneBy({
        name: updateData.name,
      });

      if (sameNameMenu && sameNameMenu.id !== id) {
        throw new Error('菜单名称已存在');
      }
    }

    return this.menuRepository.update(id, updateData);
  }

  private normalizeMeta(meta: unknown) {
    if (typeof meta === 'string') {
      const value = meta.trim();

      if (!value) {
        return '{}';
      }

      try {
        JSON.parse(value);
      } catch {
        throw new Error('meta 必须是合法的 JSON 字符串');
      }

      return value;
    }

    return JSON.stringify(meta ?? {});
  }

  private normalizeNumber(value: unknown, field: string) {
    const num = Number(value);

    if (!Number.isFinite(num)) {
      throw new Error(`${field} 必须是数字`);
    }

    return num;
  }
}
