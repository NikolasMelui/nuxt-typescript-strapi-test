<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <div class="cards">
      <Card v-for="page in pages" :key="page.id" :page="page"></Card>
      <hr>
      <Card v-for="post in posts" :key="post.id" :post="post"></Card>
      <hr>
      <Card v-for="project in projects" :key="project.id" :project="project"></Card>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Page } from "~/types";
import { Post } from "~/types";
import { Project } from "~/types";
import Card from "~/components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State pages: Page;
  @State posts: Post;
  @State project: Project;
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
