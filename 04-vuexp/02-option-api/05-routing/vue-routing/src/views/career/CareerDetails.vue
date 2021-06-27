<template>
  <h1>Job Details</h1>
  <p>The job id is {{id}} </p>
</template>

<script>
export default {
    name: 'CareerDetails',
    props: ["id"],
    data(){
        return{
        //$route.params gives the route parameter
            routeId: this.$route.params.id,
        }
    }
}
</script>

<style>

</style>