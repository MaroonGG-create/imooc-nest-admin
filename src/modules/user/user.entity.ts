import { Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin_user')
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;
  @Column()
  password!: string;
  @Column()
  avatar!: string;
  @Column()
  role!: string;
  @Column()
  nickname!: string;
  @Column()
  active!: number;
}
