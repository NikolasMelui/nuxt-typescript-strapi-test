export * from './state';

export interface Page {
  id: number;
  _slug: string;
  title: string;
  description: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
}
