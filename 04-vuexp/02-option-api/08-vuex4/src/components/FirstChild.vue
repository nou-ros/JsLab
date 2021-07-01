<template>
  <h3>First Component</h3>
  <div>
    <SecondChild/>
  </div>
</template>

<script>
import SecondChild from "./SecondChild.vue";

export default {
    name: "FirstChild",
    components: {
      SecondChild
    }
}
</script>

<style>

</style>