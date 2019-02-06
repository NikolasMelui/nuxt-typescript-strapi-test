import { Page } from '~/types';
import { Post } from '~/types';
import { Project } from '~/types';

export interface RootState {
  pages: Page[];
  posts: Post[];
  projects: Project[];
}
