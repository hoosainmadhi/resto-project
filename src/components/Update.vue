<template>
<Header/>
    <h1>Hello Welcome to Update Restuarant Page</h1>
</template>

<script>

import Header from './Header.vue'

export default {
    name:'Update',

    components:{
        Header
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