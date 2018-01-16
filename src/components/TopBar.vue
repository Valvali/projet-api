

<template>
  <div class="">
    <h1>Dismorv</h1>

    <span>{{service}}</span>
    <button class="actualise" @click="ping">test</button>

    <router-link to="/signin">S'inscrire</router-link>

  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'App',
  data: function () {
    return {
	    service: "test",
      color: "green"
		};
	},
  methods: {
    ping () {
        this.$http.get('http://coop.api.netlor.fr/api/ping' ,  {headers: {'Authorization': 'Token token=3ad23921113a4c2b840575b2d3f4c6b2'}} ).then(response => {
          // success callback
          console.log(response.status)
          this.service = response.message
          this.color = "green"

        }, response => {
          // error callback
          this.service = response.message
          this.color = "red"

        })
    }
  },
  computed: {

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
