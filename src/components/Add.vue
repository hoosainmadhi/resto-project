<template>
<Header/>
    <h1>Hello Welcome to Add Restuarant Page</h1>
     <form class="add">
       <input type="text" name="name" placeholder="Enter Name" v-model="restuarant.name">
       <input type="text" name="address" placeholder="Enter Address" v-model="restuarant.address">
       <input type="text" name="contact" placeholder="Enter Contact" v-model="restuarant.contact">
       <button type="button" v-on:click="addRestuarant">Add New Restuarant</button>
     </form>
</template>

<script>

import Header from './Header.vue'
import axios from 'axios'

export default {
    name:'Add',

    components:{
        Header
    },
    data(){
      return{
        restuarant:{
          name:'',
          address:'',
          contact:''
        }
      }
    },
    methods:{
      async addRestuarant(){
      console.warn(this.restuarant);
      const result = await axios.post("http://localhost:3000/restuarant",{
        name: this.restuarant.name,
        address: this.restuarant.address,
        contact: this.restuarant.contact
      });

      if (result.status==201)
      {
        this.$router.push({name:'Home'})
      }
      console.warn(result);        
      }
    },

  mounted()
  {
    let user=localStorage.getItem('user-info');
    if(!user)
    {
        this.$router.push({name: 'SignUp'});

    }
  }
}
</script>

<style>

</style>