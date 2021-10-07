<template>
<div class="nav">
    <a href="#">Home</a>
    <a href="#">Add Restuarant</a>
    <a href="#">Update Restuarant</a>
    <a href="#">Logout</a>
</div>
</template>

<script>
export default {
        name: 'Header'        
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
