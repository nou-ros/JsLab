import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    // store data 
    counter: 5,
    counter2: 10,
    counter3: 15
  },
  mutations: {
    // change state of the data. payload is parameter 
    addToCounter(state, payload){
      state.counter = state.counter + payload;
    },
    subtractFromCounter(state, payload){
      state.counter = state.counter - payload;
    }
  },
  actions: {
    // change state of the data with async 
    // this will be commited on mutation
    async addRandomNumber(context){
      let res = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
      console.log(res);
      context.commit('addToCounter', res.data)
    }
  },
  modules: {
  }
})
