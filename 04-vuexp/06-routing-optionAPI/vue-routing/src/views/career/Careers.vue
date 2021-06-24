<template>
    <h1>Openings</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
        <!-- router link -->
        <router-link :to=" { name: 'CareerDetails', params: {id: job.id} }">
            <h5>{{job.title}}</h5>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name: "Career",
    data(){
        return{
            jobs: [
                {title: "UI/UX Designer", id: 1, detail: "lorem"},
                {title: "Web Devloper", id: 2, detail: "lorem"},
                {title: "Technical Content Writer", id: 3, detail: "lorem"}
            ]
        }
    }, 
}
</script>

<style>
    .job h5{
        padding: 10px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 500px;
        cursor: pointer;
        color: #444;
        background: #f4f4f4;
        text-align: center;
    }

    .job h5:hover{
        background: turquoise;
    }

    .job a{
        text-decoration: none;
    }
</style>