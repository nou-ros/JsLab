<template>

  <h1>Props and Emit Event</h1>
  <!-- props : -->
  <Greeting :age="age"></Greeting>
  <button @click="age--">Dec Age</button>
  <!-- emit events @ -->
  <User :age="age" @agechange="age++" @inc3="updateAge" :ageChangeFn="updateAgeCB"></User>

  <h1>Slots and NamedSlot</h1>
  <!-- Slot -->
  <AppForm>
      <div class="help">
        <p>{{ help }}</p>
      </div>
      <div class="fields">
        <input type="text" placeholder="email">
        <input type="text" placeholder="username">
        <input type="password" placeholder="password">
      </div>
      <div class="buttons">
        <button>Submit</button>
      </div>
  </AppForm>

  <AppForm>
      <div class="help">
        <p>Contact help text</p>
      </div>
      <div class="fields">
        <input type="text" placeholder="name">
        <input type="text" placeholder="message">
      </div>
      <div class="buttons">
        <button>Submit</button>
      </div>
  </AppForm>

<!-- named slot -->

  <named-slot>
    <template v-slot:help>
        <p>This is some help text</p>
      </template>
      <template v-slot:fields>
        <input type="text" placeholder="email">
        <input type="text" placeholder="username">
        <input type="password" placeholder="password">
      </template>
      <template v-slot:button>
        <button>Submit</button>
      </template>
      <p>Dummy Text</p>
    </named-slot>


  <h1>Dyanamic Component operation </h1>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>

  <!-- Dyanamic Component -->
   <!-- with keep-alive, not selected component will be alive in memory. Otherwise component will automatically be
   unmounted -->
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
</template>


<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';
import AppForm from './components/Form.vue';
import NamedSlot from './components/NamedSlot.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: 
  {
    Greeting,
    User,
    AppForm,
    NamedSlot,
    Home,
    About,
  },

  data(){
    return {
      age: 30, 
      help: 'This is some help text.',
      componentName: "Home",
    }
  },

  methods: {
    //handling parameterized event emitter
    updateAge(num){
      this.age += num
    },
    // sending function in props(same as event emitter)
    updateAgeCB(num){
      this.age += num
    }
  }
}
</script>
