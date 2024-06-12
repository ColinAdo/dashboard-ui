export interface Post {
  id: string;
  title: string;
  author: string;
  body: string;
  date: string;
  comments: CommentPost[];
}

export interface CommentPost {
  id: string;
  text: string;
  username: string;
}
