export * from './state';

export interface Page {
  id: number;
  _slug: string;
  title: string;
  description: string;
}

export interface Post {
  id: number;
  _slug: string;
  title: string;
  description: string;
  phone: string;
}

export interface Project {
  id: number;
}
