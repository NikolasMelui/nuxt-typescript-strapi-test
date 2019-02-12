
<template>
  <div>
    <h1 v-if="post">{{post.title}}</h1>
    <p v-if="post">{{post.description}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import { Post } from "~/types";
import { Project } from "~/types";

@Component({
  components: {
    // Card
  }
})
export default class extends Vue {
  @Getter("getPosts") posts: Post[];

  async asyncData({ store }) {
    const dataFetching = async entity => {
      if (store.getters[`get${entity}`].length === 0) {
        await store.dispatch(`fetch${entity}`, {
          // TODO: add the schema to take the slug and paste it into the
          // parameters
          query: `query {
          }
          `
        });
      }
    };
    await dataFetching("Posts");
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
