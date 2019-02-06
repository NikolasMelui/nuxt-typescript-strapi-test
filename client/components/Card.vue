<template>
  <div class="card">
    <h2>{{ page }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Page } from "~/types";
import { Post } from "~/types";
import { Project } from "~/types";

@Component({})
export default class Card extends Vue {
  @Prop() page: Page;
  @Prop() post: Post;
  @Prop() project: Project;
}
</script>

<style scoped>
.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
}
</style>
