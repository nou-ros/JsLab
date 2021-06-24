<template>
  <form @submit.prevent="handleSubmit">
      <label>Email</label>
      <input type="email" required placeholder="Enter email" v-model="email">

      <label>Password</label>
      <input type="password" required placeholder="Enter password" v-model="password">

      <div v-if="passwordError" class="error">{{passwordError}}</div>


      <label>Role: </label>
      <select v-model="role">
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
          <option value="analyst">Data Analyst</option>
          <option value="backend">Backend Developer</option>
      </select>

    <!-- with .alt the keyevent works but the value does not show. -->
    <label>Skills: </label>
    <!-- <input type="text" v-model="tempSkill" @keyup.alt="addSkill"> -->
    <input type="text" v-model="tempSkill" @keyup="addSkill">

    <div v-for="(skill, idx) in skills" :key=idx class="pill">
        <span @click="delSkill(skill)">{{skill}}</span>
    </div>

      <div class="terms">
          <input type="checkbox" v-model="term" required>
          <label>Accept terms and condition</label>
      </div>
    
    <!-- adding multiple values with checkboxes -->
    <p>Tags: </p>
      <div class="tags">
          <input type="checkbox" value="frontend" v-model="tags">
          <label>Frontend</label>
      
          <input type="checkbox" value="backend" v-model="tags">
          <label>Backend</label>

          <input type="checkbox" value="ux" v-model="tags">
          <label>UI/UX</label>
      </div>


      <div class="submit">
          <button>Create an Account</button>
      </div>
  </form>

<p>Email: {{email}} </p>
<p>Password: {{password}} </p>
<p>Role: {{role}} </p>
<p>Terms: {{term}} </p>
<p>Tags: {{tags}} </p>

</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: '',
            role: 'developer',
            term: false,
            tags: [],
            tempSkill: '',
            skills: [],
            passwordError: '',
        }
    },

    methods: {
        addSkill(e){
            // console.log(e);
            if(e.key===',' && this.tempSkill)
            {
                let value=this.tempSkill.split(",")
                // to not save duplicate in the array
                if(!this.skills.includes(value[0])){
                    this.skills.push(value[0]);
                }
                this.tempSkill = '';
            }
        },

        delSkill(skill){
            this.skills = this.skills.filter(item => {
                return skill !== item;
            });
        },

        handleSubmit(){
            // console.log('form submitted');
            //validate password
            this.passwordError = this.password.length > 5 ? 
            '':"password must be at least 6 chars";

            if(!this.passwordError){
                console.log("email: ", this.email);
                console.log("password: ", this.password);
                console.log("role: ", this.role);
                console.log("skills: ", this.skills);
                console.log("terms: ", this.term);
            }
        }
    }
}
</script>

<style scoped>

form{
  max-width: 400px;
  border-radius: 5px;
  background-color: #d8d8d8;
  margin: 30px auto;
  padding: 20px;
  text-align: left;
}

label{
    margin: 25px 0 15px; 
    display: inline-block;
    font-size: .8em;
}
::placeholder {
  color: black;
}
input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: rgb(53, 143, 233);
}

input[type="checkbox"]{
  width: 15px;
  margin: 0 4px 0 0;
  display: inline-block;
  position: relative;
  top: 1.5px;
}

.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: rgb(32, 32, 32);
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: rgb(29, 177, 177);
    cursor: pointer;
}

button{
    background: rgb(238, 106, 106);
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.submit{
    text-align: center;
}


.error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8rem;
    font-weight: bold;
}

</style>