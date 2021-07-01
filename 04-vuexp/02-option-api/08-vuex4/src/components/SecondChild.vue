<template>
  <h3>Second Component</h3>
  <!-- state is accessible everywhere. -->
    {{$store.state.counter}}
  <ThirdChild/>
</template>

<script>

import ThirdChild from "./ThirdChild.vue";

export default {
    name: 'SecondChild',
    components: {
      ThirdChild
    }
}
</script>

<style>

</style>