<template>
    <h1>All Posts</h1>
    <div v-if="posts.lenght">
        <div v-for="post in posts" :key="post.id">
         <router-link :to="{name: 'PostDetail', params: { id: post.id }}">{{ post.title }}</router-link>
         </div>
    </div>

     <div v-else>
        <p>Loading All Jobs</p>
    </div>

</template>

<script>
export default{
    name: 'Posts',
    data(){
        return {
        posts: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => this.posts=data)
        .catch(err => console.log(err.message))
    }
}

</script>

<style scoped>

a{
  text-decoration: none;
  color: tomato;
}
a:hover{
  color: turquoise;
}

</style>