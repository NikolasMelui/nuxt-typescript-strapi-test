import { RootState, Page, Post, Project } from '~/types';
import { MutationTree, ActionTree } from 'vuex';

export const state = (): RootState => ({
  pages: [],
  posts: [],
  projects: []
});

export const mutations: MutationTree<RootState> = {
  setPages(state: RootState, pages: Page[]): void {
    state.pages = pages;
  },
  setPosts(state: RootState, posts: Post[]): void {
    state.posts = posts;
  },
  setProjects(state: RootState, projects: Project[]): void {
    state.projects = projects;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, { app }) {
    const pages: Page[] = await app.$axios.$get('http://localhost:1337/pages');
    const posts: Post[] = await app.$axios.$get('http://localhost:1337/posts');
    const projects: Project[] = await app.$axios.$get(
      'http://localhost:1337/projects'
    );
    commit('setPages', pages);
    commit('setPosts', posts);
    commit('setProjects', projects);
  }
};
