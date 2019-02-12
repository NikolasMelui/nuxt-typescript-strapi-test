export * from './state';

export interface Page {
  _id: string;
  _slug: string;
  title: string;
  description: string;
}

export interface Post {
  _id: string;
  _slug: string;
  title: string;
  description: string;
}

export interface Project {
  _id: string;
  _slug: string;
  title: string;
  description: string;
}
