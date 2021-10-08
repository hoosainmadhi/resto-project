<template>
<Header/>
    <h1>Hello Welcome to Update Restuarant Page</h1>
    <form class="add">
       <input type="text" name="name" placeholder="Enter Name" v-model="restuarant.name">
       <input type="text" name="address" placeholder="Enter Address" v-model="restuarant.address">
       <input type="text" name="contact" placeholder="Enter Contact" v-model="restuarant.contact">
       <button type="button" v-on:click="updateRestuarant">Update Restuarant</button>
     </form>
</template>

<script>

import Header from './Header.vue'
import axios from 'axios'

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
    methods:{
      async updateRestuarant(){
      console.warn(this.restuarant);
      const result = await axios.put("http://localhost:3000/restuarant/"+this.$route.params.id,{
        name: this.restuarant.name,
        address: this.restuarant.address,
        contact: this.restuarant.contact
      });

      if (result.status==200)
      {
        this.$router.push({name:'Home'})
      }
      console.warn(result);        
      }
      
    },

  async mounted()
  {
    let user=localStorage.getItem('user-info');
    if(!user)
    {
        this.$router.push({name: 'SignUp'});

    }
    //use $route.params.id as index
    const result = await axios.get('http://localhost:3000/restuarant/'+this.$route.params.id);
    console.warn(result);
    this.restuarant=result.data; //fill   form with  data


  }
}
</script>