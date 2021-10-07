<template>
  <img alt="Vue logo" src="../assets/resto.png" />
  <h1>Login Up</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="password" />
    <button>Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<style>
export default {
    name:'Login'
}
</style>