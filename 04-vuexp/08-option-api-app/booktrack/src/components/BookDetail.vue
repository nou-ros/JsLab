<template>
  <div class="book" :class="{complete: book.complete}">
      <div class="actions">
          <h3 @click="show=!show">{{book.title}}</h3>
          <div class="icons">
              <router-link :to="{ name: 'EditBook', params: { id: book.id } }">
                  <span class="material-icons">edit</span>
              </router-link>
              <span @click="deleteBook" class="material-icons">delete_forever</span>
              <span @click="readingComplete" class="material-icons tick">done_outline</span>
          </div>
      </div>
      <div class="detail" v-if="show">
          <h5>Author: {{book.author}}</h5>
          <p>Summary: {{book.summary}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: "BookDetails",
    props: [
        'book',
    ],
    data(){
        return{
            show: false,
            uri: 'http://localhost:3000/books/' + this.book.id,
        }
    },
    methods: {
        //deleting book
        deleteBook(){
            fetch(this.uri, { method: "DELETE"})
            .then(() => this.$emit('delete', this.book.id))
            .catch((err) => console.log(err))
        },
        //toggle complete 
        readingComplete(){
            fetch(this.uri, { method: "PATCH", headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({
                complete: !this.book.complete
            })})
            .then(() => this.$emit('complete', this.book.id))
            .catch((err) => console.log(err))
        }
    }
}   
</script>

<style scoped>
    .book{
        margin: 20px auto;
        background: #eee;
        padding: 10px 20px;
        border-radius: 4px;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
        border-left: 4px solid #00c6e9;
    }
    h3{
        cursor: pointer;
    }
    h5{
        margin: 2px;
    }

    .actions{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .material-icons{
        font-size: 20px;
        margin-left: 10px;
        color: #888;
        cursor: pointer;
    }

    .material-icons:hover{
        color: #222;
    }

    .book.complete{
        border-left: 4px solid #13c70d;
    }

    .book.complete .tick{
        color: #1f8a1b;
    }
    .material-icons.tick:hover{
        color: #222;
    }
</style>