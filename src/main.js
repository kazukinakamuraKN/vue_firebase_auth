import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app = '';

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAmPwINtJ9c2qGiHP7shqrFjJVew7BpTVI",
  authDomain: "vue-firebase-4054b.firebaseapp.com",
  databaseURL: "https://vue-firebase-4054b.firebaseio.com",
  projectId: "vue-firebase-4054b",
  storageBucket: "vue-firebase-4054b.appspot.com",
  messagingSenderId: "701721228624"
})

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
