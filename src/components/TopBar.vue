

<template>
  <header>
    <h1>Dismorv</h1>
    <div class="info">

      <span class="status">État : {{message}}</span>
      <button class="actualise" @click="ping">test</button>

      <router-link to="/signin">Se connecter</router-link>
      <router-link to="/signup">S'inscrire</router-link>
    </div>


  </header>
</template>

<script>
import Vue from 'vue'

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
        this.$http.get('http://coop.api.netlor.fr/api/ping' ,  {headers: {'Authorization': 'Token token=3ad23921113a4c2b840575b2d3f4c6b2'}} ).then(response => {
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
    }
  },
  computed: {

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #2E0854	;
  padding: 10px;
  margin: -10px -10px 10px -10px;

  width: calc( 100% + 2 * 10px );
}
header * {
  color: white;
  margin: 15px;
  display:inline;
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

</style>
