<template>
  <img alt="Vue logo" src="../assets/resto.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="password" />
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: "SignUp",
  data(){
      return{
          name: '',
          email: '',
          password: ''
      }
  },
  methods:{
      async signUp(){
        console.warn("signUp",this.name, this.email, this.password);
        let result =  await axios.post("http://localhost:3000/user",{
            name: this.name,
            password: this.password,
            email: this.email

        });
        console.warn(result);
        if(result.status==201)
        {
            localStorage.setItem("user-info",JSON.stringify(result.data));
            // redirect to Home   after user registers 
            this.$router.push({name: 'Home'});
        }
      }
  },
  mounted(){
    let user=localStorage.getItem('user-info');
    if(user){
        this.$router.push({name: 'Home'});

    }
  }
};
</script>

<style>
</style>