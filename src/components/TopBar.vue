

<template>
  <header>
    <h1>Dismorv</h1>
    <div class="info">

      <span class="status">État : {{message}}</span>
      <button class="actualise" @click="ping">test</button>
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
      color: "green"
		};
	},
  methods: {
    ping () {
        api.get('/ping').then(response => {
          // success callback
          console.log(response.message)
          this.message = response.status
          this.service = true
          this.color = "green"

        }, response => {
          // error callback
          console.log(response.message)
          this.message = response.status
          this.service = false
          this.color = "red"

        })
    },

    signout () {
  		this.$store.dispatch('auth/logout', this.user).then(response => {
  			this.$router.push({name: "signin"})
      })
    }
  },
  computed: {
  },
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
  vertical-align: center;
  margin: 0;
  display: inline;
  float: right;

}

a:hover{
  text-decoration: underline;
  cursor: pointer;
}
</style>
