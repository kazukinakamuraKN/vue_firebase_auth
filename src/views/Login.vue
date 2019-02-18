<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <button @click="login">Connection</button>
    <p>You don't have an accout ? You can create one
      <router-link to="/signup">create one</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import firebase from 'firebase'
import Vue from 'vue'
export default Vue.extend({
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          alert('Well done ! You are now connected')
          this.$router.replace('home')
        },
        (err) => {
          alert('Oops ' + err.message)
        }
      )
    }
  }
})
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
