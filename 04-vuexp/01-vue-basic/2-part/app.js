let vm = Vue.createApp({
    data(){
        return {
            isPurple: false,
            selectedColor: '',
            size: 150, 
            mode: 1,
            birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'], 
            animes: [
                { title: "Barakamon", vol: 17, airDate: ['Wednessday', 'Sunday'] },
                { title: "One Punch Man", vol: 11, airDate: ['Friday', 'Monday'] },
                { title: "Solo Leveling", vol: 19, airDate: ['Saturday', 'Thursday'] }
            ]
        }
    }, 
    computed: {
        circle_classes(){
            return { purple: this.isPurple }
        }
    }
}).mount('#app')