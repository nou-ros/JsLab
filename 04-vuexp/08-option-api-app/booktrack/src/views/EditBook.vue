<template>
    <h2>Edit Book Information</h2>
     <form @submit.prevent="handleSubmit" >
      <label>Title:</label>
      <input type="text" v-model="title" required>
    
      <label>Author:</label>
      <input type="text" v-model="author" required>

      <label>Summary:</label>
      <textarea required v-model="summary" ></textarea>

      <button>Add Book</button>
  </form>
</template>

<script>
export default {
    name: 'EditBook',
    props: ['id'],
    data(){
        return {
            title: '',
            author: '',
            summary: '',
            uri: 'http://localhost:3000/books/' + this.id
        }
    },
    mounted(){
    fetch(this.uri)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        this.title = data.title,
        this.author = data.author,
        this.summary = data.summary
    })
    .catch(err => console.log(err))
  }, 

  methods: {
      handleSubmit(){
          fetch(this.uri, { method: "PATCH", headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({
                title: this.title,
                author: this.author,
                summary: this.summary
            })})
            .then(() =>  {
                this.$router.push('/')
            })
            .catch((err) => console.log(err))
      }
  }
}
</script>

<style>
h2{
    text-align: center;
}

</style>