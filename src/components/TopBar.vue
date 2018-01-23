

<template>
  <header>
    <h1>Dismorv</h1>
    <div class="info">

      <span class="status" v-if="service" style="color : #00ff6b" >État : online </span> <!-- green -->
      <span class="status" v-else         style="color : #ff3a09">   État : {{message}}</span> <!-- red -->

      <a v-on:click='signout'>Déconnexion</a>

    </div>


  </header>
</template>

<script>
import Vue from 'vue'
import api from '@/services/api'

export default {
  name: 'App',
  data: function () {
    return {
	    service: false,
      message: "",
		};
	},
  methods: {
    signout () {
  		this.$store.dispatch('auth/logout', this.user).then(response => {
  			this.$router.push({name: "signin"})
      })
    }
  },
  created: function () {
        api.get('/ping').then(response => {
          // success callback
          console.log(response.message)
          this.message = response.message
          this.service = true
        }, response => {
          // error callback
          console.log(response.message)
          this.message = response.message
          this.service = false

        })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #2E0854	;
  padding: 10px;
  margin: -10px -8px 10px -8px;
  text-align: left;
}
header * {
  color: white;
  margin: 15px;
  display: inline;
}

header h1{
  font-size: 50px;
}

.info{
  padding-top: 1%;
  margin: 0;
  display: inline;
  float: right;

}

a:hover{
  text-decoration: underline;
  cursor: pointer;
}
</style>
