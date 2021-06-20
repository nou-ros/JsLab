const vm = Vue.createApp({
    
    // working with data
    data(){
        return{
            firstName: 'Max',
            lastName: 'Teg',
            url: "https://google.com",
            raw_html : "<h3>Raw Html</h3>",
            age: 0,
            profession: ''
        }
    },

    //methods 
    methods: {
        // recommended not to use arrow function as 'this' keywork will not work there.
        add(event, v){
            console.log('add')
            event.preventDefault();
            if(v)
            {
                return this.age+=v;
            }
            else{
                return this.age+=1
            }
        },

        showProfession(event){
            console.log('Profession')
            return this.profession = event.target.value;
        },
        
    },

   //computed properties - can't be asynchronous
   computed: {
        fullName(){
            console.log("fullName computed properties")
            return `${this.firstName} ${this.lastName}`;
        },
   },

   // to watch on data if they change, can be asynchronous.
   watch: {
        age(){
            setTimeout(() => {
                this.age = 20
            }, 3000)
        }
   }


}).mount('#app')

// accessing vue instance(data)
setTimeout(() => {
    vm.firstName = 'Bob'
}, 2000)


// multiple vue instances
// Vue.createApp({
    
//     // working with data
//     data(){
//         return{
//             firstName: 'Rin',
//             lastName: 'Teg'
//         }
//     }

// }).mount('#app2')

