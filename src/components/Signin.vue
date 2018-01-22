<template>
	<div class="center">
		<form @submit.prevent="signin()">
	    <label for="name">Indiquer votre mail</label><br>
			<input type="text" v-model="user.email" placeholder="mail"><br>

			<label for="password">Indiquer votre mot de passe</label><br>
			<input type="text" v-model="user.password" placeholder="Qd4ma39£fb"><br>

			<button type="submit">valider</button>
		</form>
	</div>

</template>

<script>
import api from '@/services/api'

export default {


	data () {
		return {
			user:{mail: "", password: ""}
		}
	},
	methods: {
		signin () {
			this.$store.dispatch('auth/login', this.user).then(response => {
				this.$router.push({name: "chat"})
			})
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
</style>
