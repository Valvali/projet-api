<template>
<form @submit.prevent="signout()">
	    
			<button type="submit">Deconnexion</button>
		</form>
</template>

<script>
import api from '@/services/api'
export default {
   data() {


},

   methods: {
	signout () {
		this.$store.dispatch('auth/logout', this.user).then(response => {
				this.$router.push({name: "signin"})
			})
	}
}

}

</script>