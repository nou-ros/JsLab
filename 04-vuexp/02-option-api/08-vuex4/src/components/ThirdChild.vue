<template>
  <h3>Third Component</h3>
  <FourthChild/>
</template>

<script>

import FourthChild from "./FourthChild.vue";

export default {
    name: 'ThirdChild',
    components: {
      FourthChild
    }
}
</script>

<style>

</style>