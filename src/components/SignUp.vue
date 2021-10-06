<template>
  <img alt="Vue logo" src="../assets/resto.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="password" />
    <button v-on:click="signUp">Sign Up</button>
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
            alert("sign up done");
            localStorage.setItem("user-info",JSON.stringify(result.data))
        }
      }
  }
};
</script>

<style>
.logo{
  width: 100px;
}

.register input{
  width: 300px;
  height: 40px;
  padding-left:  20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;

}
.register button{
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>

