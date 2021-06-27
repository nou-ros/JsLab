<template>
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
    data(){
        return {
            title: '',
            author: '',
            summary: ''
        }
    },
    methods: {
        handleSubmit(){
            let book = {
                title: this.title,
                author: this.author,
                summary: this.summary,
                complete: false
            }
            // console.log(book)
            fetch('http://localhost:3000/books', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(book)
            })
            .then(() => {
                this.$router.push('/')
            })
            .catch((err)=> console.log(err))
        }
    }
}
</script>

<style>
form{
    background: white;
    padding: 20px;
    border-radius: 10px;
}
label{
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0
}

input{
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}

textarea{
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}

textarea{
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
}

form button{
    display: block;
    margin: 20px auto 0;
    background: #32b2c9;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    font-size: 15px;
}
button:hover{
    background: #126574;
}
</style>