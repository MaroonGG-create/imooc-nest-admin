import { Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menu')
@Unique(['path', 'name'])
export class Menu {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  path!: string;

  @Column()
  name!: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: null,
  })
  redirect?: string | null;

  @Column()
  meta!: string;

  @Column()
  pid!: string;

  @Column({ default: 1 })
  active!: number;
}
