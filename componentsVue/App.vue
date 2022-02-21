<template>
  <div>{{ test }}</div>
</template>

<script>
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
