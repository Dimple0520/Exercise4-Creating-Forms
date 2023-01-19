import { Author } from './author';

export class Book {
 
  public id: number;
  public name: string;
  public authors: Author[];
  public isbn: string;

  constructor(id: number, name: string, authors: Author[], isbn: string) {
    this.id = id;
    this.name = name;
    this.authors = authors;
    this.isbn = isbn;
  }
}
