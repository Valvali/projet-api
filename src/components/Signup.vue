<template>
	<div class="center">
		<form v-on:submit="NewUser" action="#">
	    <label for="name">Indiquer votre nom complet</label><br>
			<input type="text" v-model="name" placeholder="your name"><br>

			<label for="email">Indiquer votre courriel</label><br>
			<input type="email" v-model="email" placeholder="example@domain.com"><br>

			<label for="password">Indiquer votre mot de passe</label><br>
			<input type="text" v-model="password" placeholder="Qd4ma39£fb"><br>

			<button type="submit">valider</button>
		</form>
	</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Signin',
  data () {
    return {

    }
  },
	methods: {
    NewUser () {
			if(this.name != "" 	 || this.email != ""  || this.password != ""  ){
				alert("ok")
				//post coop & get token to push in localstrorage
			}
    }
  },
}
</script>

<style scoped>
	.center{
		font-size: 20px;
		line-height: 200%;
		min-width: 300px;
		margin : 35%;
		margin-top: 40px;
		margin-bottom: 10px;
	}
</style>
