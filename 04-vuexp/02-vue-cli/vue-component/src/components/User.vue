<template>
  <p>The user is {{age}} years old</p>
  <button @click="AgeInc">Inc Age</button>
  <button @click="Inc3">Inc Age By 3</button>
  <button @click="ageChangeFn(5)">Inc Age By 5</button>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
    name: "User",
    // props: ["age"],
    // validating props with type (debugging purpose)
    props: {
        age: {
            type: Number,
            // required: true,
            // default: 20,
            // custom validator 
            validator(value){
                return value < 100
            }
        }, 
        ageChangeFn: Function
    },
    emits: ["agechange", "inc3"], //optional or will get warning
    //computed properties will not change the parent props
    computed: {
        ageDoubled(){
            // we can access props with this keyword.
            return this.age * 2;
        }
    }, 
    methods: {
        AgeInc(){
            this.$emit('agechange', 3)
        },
        // parameter event emitter
        Inc3(){
            this.$emit('inc3', 3)
        }
    }
}
</script>

<style>

</style>