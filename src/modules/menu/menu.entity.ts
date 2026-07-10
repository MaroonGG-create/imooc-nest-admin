import { Entity,Unique, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menu')
// @Unique(['username'])
export class Menu {
  @PrimaryGeneratedColumn()
  id!: number;

  // @Column()
  // username!: string;
  // @Column()
  // password!: string;
  // @Column()
  // avatar!: string;
  // @Column()
  // role!: string;
  // @Column()
  // nickname!: string;
  // @Column()
  // active!: number;
}
