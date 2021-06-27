<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Careers' }">Careers</router-link>
  </div>

<!-- pragmatic navigation -->
  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button>

  <router-view/>
</template>

<script>

export default {
  name: "App",
  methods: {
    redirect() {
      // redirect to home from anywhere.
      this.$router.push({
        name: "Home"
      })
    },
    back(){
      //go back to previous page. 
      //number 1, 2 denotes how many previous pages we want to go
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    }
  }
}
</script>

<style>
*{
  text-align: center;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: #9ae03d;
  background: #253341;
}
</style>
