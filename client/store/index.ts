import { RootState, Page, Post, Project } from '~/types';
import { MutationTree, ActionTree, GetterTree } from 'vuex';

// Set
import Strapi from 'strapi-sdk-javascript/build/main';

// Define the url
const apiUrl = process.env.API_URL || 'http://localhost:1337';

export const state = (): RootState => ({
  pages: [],
  posts: [],
  projects: []
});

export const mutations: MutationTree<RootState> = {
  setPages(state: RootState, pages: Page[]): void {
    state.pages = pages;
  },
  clearPages(state: RootState): void {
    state.pages = [];
  },
  setPosts(state: RootState, posts: Post[]): void {
    state.posts = posts;
  },
  clearPosts(state: RootState): void {
    state.posts = [];
  },
  setProjects(state: RootState, projects: Project[]): void {
    state.projects = projects;
  },
  clearProjeects(state: RootState): void {
    state.projects = [];
  }
};

// Set the strapi object
const strapi = new Strapi(apiUrl);

export const actions: ActionTree<RootState, RootState> = {
  async fetchPages({ commit }, query) {
    const pages: Page[] = await strapi.request('post', '/graphql', {
      data: query
    });
    commit('setPages', pages);
  },
  async fetchPosts({ commit }, query) {
    const posts: Post[] = await strapi.request('post', '/graphql', {
      data: query
    });
    commit('setPosts', posts);
  },
  async fetchProjects({ commit }, query) {
    const projects: Project[] = await strapi.request('post', '/graphql', {
      data: query
    });
    commit('setProjects', projects);
  }
};

export const getters: GetterTree<RootState, RootState> = {
  getPages(state: RootState): Page[] {
    return state.pages;
  },
  getPosts(state: RootState): Post[] {
    return state.posts;
  },
  getProjects(state: RootState): Project[] {
    return state.projects;
  }
};
