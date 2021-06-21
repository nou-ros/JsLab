<template>
<h3>Child Component</h3>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You must be 25 or more to see this.</p>
  
</template>

<script>
export default {

    name: "Gretting",
    props: ['age'],
    data() {
        return {
            
            msg: "Hello World!",
        }
    }
}
</script>

<style scoped lang="scss">
$color: teal;

p{
    color: $color;
}
</style>