<template>
  <div class="home">
    <program/>
  </div>
</template>

<script>
// @ is an alias to /src
import program from '@/components/program01.vue';
export default {
  name: 'Home',
  components: {
    program,
  },
};
</script>
