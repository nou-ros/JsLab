<template>
  <div class="ctr">
    <transition name="fade" mode="out-in"> 
    <Questions v-if="questionAnswered < questions.length" 
      :questions="questions"
      :questionAnswered="questionAnswered"
      @question-answered="queAns"
      >
      </Questions>

    <Results v-else :totalCorrect="totalCorrect" :results="results">
      </Results>
  </transition> 
  <!-- button will only appear when questions.length is 0 -->
    <button type="button" class="reset-btn" 
    @click.prevent="resetProperty" 
    v-if="questionAnswered === questions.length"
    >Reset</button>
  </div>
</template>

<script>
import Questions from "./components/Questions.vue";
import Results from "./components/Results.vue";

export default {
  name: 'App',

  components: {
    Questions,
    Results
  },

  data(){
    return{
    
    questionAnswered: 0,
    totalCorrect: 0,
    questions: [
        {
            q: 'Who is the mangaka of onepunch man?', 
            answers: [
                {
                    text: 'One',
                    is_correct: true
                },
                {
                    text: 'Gintoki',
                    is_correct: false 
                },
                {
                    text: 'Oda Nobunaga',
                    is_correct: false 
                },
                {
                    text: 'Kishimoto',
                    is_correct: false 
                }
            ] 
        },
        { 
            q: '"Spirited Away" aired in?', 
            answers: [
                {
                    text: '2005',
                    is_correct: false
                },
                {
                    text: '2007',
                    is_correct: false 
                },
                {
                    text: '2001',
                    is_correct: true 
                },
                {
                    text: '1998',
                    is_correct: false 
                }
            ] 
        },
        { 
            q: 'Which sensei died in Naruto?', 
            answers: [
                {
                    text: 'Iruka',
                    is_correct: false
                },
                {
                    text: 'Jiraya',
                    is_correct: true 
                },
                {
                    text: 'Kakashi',
                    is_correct: false 
                }
            ] 
        },
    ],

    results: [
        {
            min: 0,
            max: 2,
            title: "Try again!",
            desc: "Do a little more studying and you may succeed!"
        },
        {
            min: 3,
            max: 3,
            title: "Wow, you're a genius!",
            desc: "Studying has definitely paid off for you!"
        }
    ]

    }
  },
  methods: {
    queAns(is_correct){
      if(is_correct){
        this.totalCorrect++;
      }

      this.questionAnswered++;
    },
    
    
    resetProperty(){
      this.questionAnswered = 0;
      this.totalCorrect = 0;
    },
  }
}
</script>

<style>

</style>
