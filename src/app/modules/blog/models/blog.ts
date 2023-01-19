import { Comment } from './comment';

export class Blog {
  public id: number;
  public title: string;
  public description: string;
  public author: string;
  public comments: Comment[];

  constructor(
    id: number,
    title: string,
    description: string,
    author: string,
    comments: Comment[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.comments = comments;
  }
}
