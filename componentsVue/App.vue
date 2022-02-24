<template>
  <div>{{ test }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  name: 'App',
  data() {
    return {
      test: 'Webpack Typescript Test',
    };
  },
  mounted() {
    console.log('mounted');
  },
});
</script>
