import { Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book')
@Unique(['fileName'])
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fileName!: string;

  @Column()
  cover!: string;

  @Column()
  title?: string;

  @Column()
  author!: string;

  @Column()
  publisher!: number;

  @Column()
  bookId: string;

  @Column()
  category: number;

  @Column()
  categoryText: string;

  @Column()
  language: string;

  @Column()
  rootFile: string;
}
