<template>
  <h2>Counter Vuex</h2>
  <!--  vuex state with mapState -->
  <!-- <h3 class="counter"> {{counter2}} </h3> -->
  <h3 class="counter"> {{counter}} </h3>
  <button @click="subtractFromCounter(parseInt(value))">-</button>
  <input type="number" v-model="value">
  <button @click="addToCounter(parseInt(value))">+</button>

  <div>
    <button @click="addRandomNumber" class="random">Add Random</button>
  </div>
  
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "Counter",
  data() {
    return {
      value: 0,
      // access state (first way)
      // counter: this.$store.state.counter
    }
  },
  //access state with computed and mapState
  computed: {
    ...mapState(["counter", "counter2"])
  },
  methods: {
    ...mapMutations(["addToCounter", "subtractFromCounter"]),
    ...mapActions(["addRandomNumber"])
  },
}
</script>

<style>

  .counter{
    font-size: 5rem;
  }

  button{
    border-radius: 100%;
    border:none;
    width: 2rem;
    height: 2rem;
    font-weight: 600;
    cursor: pointer;
  }

  input{
    padding: 0.4rem;
    margin: 0 0.5rem;
  }

  .random{
    background-color: crimson;
    color: white;
    cursor: pointer;
    border-radius: .5rem;
    width: auto;
    margin-top: 1rem;
  }

</style>