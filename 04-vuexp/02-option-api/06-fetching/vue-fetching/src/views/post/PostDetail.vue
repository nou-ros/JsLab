<template>
    <h1>Post Details</h1>

    <div v-if="post">
        <h3> {{post.title}} </h3>
        <p>{{post.author}}</p>
    </div>
    
    <div v-else>
        <p>Loading Details</p>
    </div>

</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            post: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/posts/' + this.id)
        .then(res => res.json())
        .then(data => this.post=data)
        .catch(err => console.log(err.message))
    }
}
</script>
