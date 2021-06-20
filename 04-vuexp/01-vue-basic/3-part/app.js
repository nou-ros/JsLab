let vm = Vue.createApp({
    data(){
        return{
            message: 'Hello World!',
            location: "Earth"
        }
    }, 
    // -- life cycle hooks --

    beforeCreate(){
        console.log("beforeCreate() called", this.message)
        //before the creation of any instance
    },
    created(){
        console.log("created() called", this.message)
        //after the creation of instance
    },
    beforeMount(){
        console.log("beforeMount() called", this.$el) 
        // template is compiled but not inserted in the document
    },
    mounted(){
        console.log("mounted() called", this.$el) 
        // compiled template is inserted in the document
    },
    //following 2 is mostly used for debugging
    beforeUpdate(){
        console.log('beforeUpdate() called')
        //data is changed but not applied
    },
    updated(){
        console.log('updated() called')
        //changed data has been applied.
    },
    beforeUnmount(){
        console.log('beforeUnmount() called')
        //right before an instance is unmounted
    },
    unmounted(){
        console.log('unmounted() called')
        //right after an instance is unmounted
    },


    // with template only this will be visible in browser
    template: `<h3>{{location}}</h3>`,
})


vm.mount('#app')