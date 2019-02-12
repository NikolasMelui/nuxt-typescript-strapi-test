<template>
  <div class="card">
    <h2>{{ posts }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Post } from "~/types";

@Component
export default class Card extends Vue {
  @Prop({}) posts: Post;
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
