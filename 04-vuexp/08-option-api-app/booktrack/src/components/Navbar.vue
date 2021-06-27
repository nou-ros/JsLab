<template>
  <nav class="main-nav">
      <router-link :to="{ name: 'Home' }">Books</router-link>
      <router-link :to="{ name: 'AddBook' }">Add New Book</router-link>
  </nav>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style>
.main-nav{
    text-align: center;
    margin: 40px auto;
}

.main-nav a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: rgb(49, 146, 175);
    font-size: 18px;
}

a.router-link-active{
    border-bottom: 2px solid #27ca94;
    padding-bottom: 4px;
}

</style>