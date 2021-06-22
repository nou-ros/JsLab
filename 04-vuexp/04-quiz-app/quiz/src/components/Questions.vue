<template>
     <div class="questions-ctr">
        <div class="progress">
            <div class="bar" :style="{ width: `${(questionAnswered/questions.length)*100}%` }"></div>
            <div class="status"> {{questionAnswered}} out of {{questions.length}} questions answered</div>
        </div>
        <transition-group name="fade">
        <div class="single-question" 
        v-for="(question, idx) in questions" :key="question.q"
        
        v-show="questionAnswered === idx" 
        >
        <!--  v-show determines only one quenstion will be shown. -->
            <div class="question"> {{ question.q}} </div>
            <div class="answers" v-for="answer in question.answers" :key="answer.text">
                <div class="answer" @click.prevent="selectAnswer(answer.is_correct)"> {{ answer.text }} </div>
            </div>
        </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "Questions",
    props: ["questions", "questionAnswered"],
    emits: ["question-answered"],
    methods: {
        selectAnswer(is_correct){
            this.$emit('question-answered', is_correct);
        }
    }
}
</script>

