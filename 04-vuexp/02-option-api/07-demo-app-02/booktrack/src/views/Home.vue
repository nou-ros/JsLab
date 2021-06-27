<template>
  <div class="home">
     <FilterBook @bookFilter="current=$event" :current="current"/>
    <div v-if="books.length">
      <div v-for="book in filteredBooks" :key="book.id">
        <BookDetail :book="book" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>
import BookDetail from '../components/BookDetail.vue';
import FilterBook from '../components/FilterBook.vue'

export default {
  name: 'Home',
  components: {
    BookDetail,
    FilterBook,
  },
  data(){
    return{
      books: [],
      current: 'all',
    }
  },
  mounted(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(data => this.books=data)
    .catch(err => console.log(err))
  }, 
  methods: {
    handleDelete(id){
      this.books = this.books.filter((book) => {
        return book.id !== id;
      })
    },
    handleComplete(id){
      let b = this.books.find((book) => {
        return book.id === id;
      })

      b.complete = !b.complete;
    }
  },

  // book filtering by completed, currently reading and all
  computed: {
    filteredBooks(){
      if(this.current==='completed')
      {
        return this.books.filter(book => book.complete)
      }
      if(this.current==='ongoing')
      {
        return this.books.filter(book => !book.complete)
      }

      return this.books
    }
  }
}
</script>
