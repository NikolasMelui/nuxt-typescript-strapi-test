<template>
  <section>
    <div class>
      <h1 class="header">Nuxt TypeScript Starter</h1>
      <h2 v-for="(page, pageIndex) in pages" :key="pageIndex">{{ page }}</h2>
      <ul>
        <h3>Posts</h3>
        <li v-for="(post, postIndex) in posts" :key="postIndex">{{ post }}</li>
        <nuxt-link to="`/posts/${post._slug}`">{{ post.title }}</nuxt-link>
      </ul>
      <ul>
        <h3>Projects</h3>
        <li v-for="(project, projectIndex) in projects" :key="projectIndex">{{ project.title }}</li>
        <nuxt-link to="`/projects/${project._slug}`">{{ project.title }}</nuxt-link>
      </ul>
      <!-- <Card></Card> -->
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import { Page } from "~/types";
import { Post } from "~/types";
import { Project } from "~/types";
// import Card from "~/components/Card.vue";

@Component({
  components: {
    // Card
  }
})
export default class extends Vue {
  @Getter("getPages") pages: Page[];
  @Getter("getPosts") posts: Post[];
  @Getter("getProjects") projects: Project[];

  async asyncData({ store }) {
    const dataFetching = async entity => {
      if (store.getters[`get${entity}`].length === 0) {
        await store.dispatch(`fetch${entity}`, {
          query: `query {
            ${String(entity).toLowerCase()} {
              _id
              _slug
              createdAt
              title
            }
          }
          `
        });
      }
    };
    await dataFetching("Pages");
    await dataFetching("Posts");
    await dataFetching("Projects");
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
