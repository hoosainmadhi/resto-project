<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restuarant</router-link>
    <router-link to="/update">Update Restuarant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
</div>
</template>

<script>
export default {
        name: 'Header',
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name:'Login'})
            }
        }         
    }
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;

}

.nav a{
    float:left;
    color:  #f2f2f2f2;
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
    margin-right: 5px  ;
    font-size: 17;

}

.nav a:hover{
    background-color: #ddd;
    color: #333
}


</style>
