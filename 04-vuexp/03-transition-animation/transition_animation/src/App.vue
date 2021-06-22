<template>
  <button @click="flag = !flag">Toggle</button>

  <!-- Animation with CSS -->
  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="lag">Hello world!</h2>
    <h2 v-else>Ello</h2>
     <h3 v-show="lag">Ello!</h3> it works same as v-if logic 
  </transition> -->

  <!-- <transition name="zoom" type="transition" appear>
    <h3 v-if="lag">Hello</h3>
  </transition>
   -->

   <!-- Animation with JS -->
   <!-- <transition @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  :css="false"
  >
    <h2 v-if="flag">Hello</h2>
   </transition>
</template> -->

 <!-- Animation with css and perform other operation in JS -->
  <!-- <transition @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  :css="true"
  name="fade"
  >
    <h2 v-if="flag">Hello</h2>
 </transition> -->


 <!-- Animating a list -->
<!-- 
 <button @click="addItem">Add</button>
  <ul>

    <transition-group name="fade">
      <li v-for="(number, index) in numbers" :key="number" @click="removeItem(index)">
        {{ number }}
      </li>
    </transition-group>
  </ul> -->

  <!-- using animate css external library -->
 <button @click="addItem">Add</button>
  <ul>

    <transition-group name="fade"
      enter-active-class="animate__animated animate__swing"
      leave-active-class="animate__animated animate__wobble"
    >
      <li v-for="(number, index) in numbers" :key="number" @click="removeItem(index)">
        {{ number }}
      </li>
    </transition-group>
  </ul>

</template> 




<script>

export default {
  name: 'App',
  data(){
    return {
      lag: false,
      flag: true,
      numbers: [1,2,3,4,5],
    }
  },

  methods: {
    beforeEnter(el){
      console.log('before-enter event fired', el);
    },
    enter(el){
      console.log('enter event fired', el);

      // if we are using css animation and js animation simultanously we will not use the done as params.
      // const animation = el.animate([{ transform: "scale3d(0, 0, 0)" }, {}], {
      //   duration: 1000,
      // });

      // animation.onfinish = () => {
      //   done();
      // }
      
    },
    afterEnter(el){
      console.log('after-enter event fired', el);
    },
    beforeLeave(el){
      console.log('before-leave event fired', el);
    },
    leave(el){
      console.log('leave event fired', el);

      // const animation = el.animate([{}, { transform: "scale3d(0,0,0)" }], {
      //   duration: 1000,
      // });

      // animation.onfinish = () => {
      //   done();
      // }
    },
    afterLeave(el){
      console.log('after-leave event fired', el);
    },

    addItem(){
      const num = Math.floor(Math.random() * 100 + 1); // random numbers from 1 - 100

      const index = Math.floor(Math.random()* this.numbers.length); // random index from 0 - array.length

      this.numbers.splice(index, 0, num); 
    },

    removeItem(index){
      this.numbers.splice(index, 1);
    }

  }
}
</script>

<style>

/* css animation */
  .fade-enter-from{
    opacity: 0;
  }

  .fade-enter-active{
    transition: all .5s linear;
  }

  .fade-leave-to{
    transition: all .80s linear;
    opacity: 0;
  }

  /* added when items are changing positions in transition-group*/
  .fade-move{
    transition: all 1s linear;
  }

  .fade-leave-active{
    position: absolute;
  }

  h3{
    width: 400px;
    padding: 20px;
    margin: 20px;
  }

  .zoom-enter-active{
    animation: zoom-in 1s linear forwards;
    /* adding a fading */
    transition: all 2s linear;
  }

  .zoom-leave-active{
    animation: zoom-out 1s linear forwards;
    transition: all 2s linear;
  }

  .zoom-enter-from{
    opacity: 0;
  }

  .zoom-leave-to{
    opacity: 0;
  }

  @keyframes zoom-in {
    from{
      transform: scale(0, 0);
    }

    to{
      transform: scale(1, 1);
    }
  }

  @keyframes zoom-out {
    from{
      transform: scale(1, 1);
    }

    to{
      transform: scale(0, 0);
    }
  }


  li{
    font-size: 22px;
    cursor: pointer;
  }

  /* external animate.css class  */

  .animate__wobble{
    position: absolute;
  }

  .animate__swing{
    position: absolute;
  }
  

  .animate__animated{
    animation-duration: 1.5s;
  }

</style>
