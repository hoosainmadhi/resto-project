<template>
<Header/>
    <h1>Hello Welcome to Update Restuarant Page</h1>
    <form class="add">
       <input type="text" name="name" placeholder="Enter Name" v-model="restuarant.name">
       <input type="text" name="address" placeholder="Enter Address" v-model="restuarant.address">
       <input type="text" name="contact" placeholder="Enter Contact" v-model="restuarant.contact">
       <button type="button" v-on:click="addRestuarant">Update Restuarant</button>
     </form>
</template>

<script>

import Header from './Header.vue'

export default {
    name:'Update',

    components:{
        Header,
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