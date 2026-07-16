import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  getBookList(params: any = {}) {
    let page = +params.page || 1;
    let pageSize = +params.pageSize || 20;
    const { title = '', author = '' } = params;
    if (page <= 0) {
      page = 1;
    }
    if (pageSize <= 0) {
      pageSize = 20;
    }
    let where = 'WHERE 1=1';
    if (title) {
      where += ` AND title LIKE '%${title}%'`;
    }
    if (author) {
      where += ` AND author LIKE '%${author}%'`;
    }
    const QUERY_ALL_SQL = `SELECT * FROM book ${where} limit ${pageSize} offset ${(page - 1) * pageSize} `;
    return this.bookRepository.query(QUERY_ALL_SQL);
  }
  countBookList(params: any = {}) {
    const { title = '', author = '' } = params;
    let where = 'WHERE 1=1';
    if (title) {
      where += ` AND title LIKE '%${title}%'`;
    }
    if (author) {
      where += ` AND author LIKE '%${author}%'`;
    }
    const QUERY_ALL_SQL = `SELECT count(*) as count FROM book ${where} `;
    
    return this.bookRepository.query(QUERY_ALL_SQL);
  }
}
