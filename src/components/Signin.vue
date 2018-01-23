<template>
	<div class="center">
		<form v-if="inscription" @submit.prevent="signin()" >
	    <label for="name">Indiquer votre mail</label><br>
			<input type="text" v-model="user.email" placeholder="mail"><br>

			<label for="password">Indiquer votre mot de passe</label><br>
			<input type="password" v-model="user.password" ><br>

			<button type="submit">valider</button><br><br>
			<a class="changeSign" v-on:click='changeSign'>S'inscrire</a>
		</form>
		<form v-else @submit.prevent="signup()" action="#">
	   	<label for="name">Indiquer votre nom complet</label><br>
			<input type="text" v-model="name" placeholder="your name"><br>

			<label for="email">Indiquer votre courriel</label><br>
			<input type="email" v-model="email" placeholder="example@domain.com"><br>

			<label for="password">Indiquer votre mot de passe</label><br>
			<input type="password" v-model="password"><br>

			<button type="submit">valider</button><br><br>
			<a class="changeSign" v-on:click='changeSign'>Se Connecter</a>

		</form>

	</div>

</template>

<script>
import api from '@/services/api'

export default {


	data () {
		return {
			user:{mail: "", password: ""},
			inscription: false,
		}
	},
	methods: {
		signin () {
			this.$store.dispatch('auth/login', this.user).then(response => {
				this.$router.push({name: "chat"})
			})
		},
		changeSign () {//interverti Signin et Signup
			this.inscription = !this.inscription
		}
	}
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

	.changeSign{
		color: grey;
	}

	.changeSign:hover{
		text-decoration: underline;
		cursor: pointer;
	}
</style>
