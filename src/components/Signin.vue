<template>
	<form action="/signin">
    <label for="name">Indiquer votre nom complet</label><br>
		<input type="text" name="name" placeholder="your name"><br>

		<label for="email">Indiquer votre nom complet</label><br>
		<input type="email" name="email" placeholder="your name"><br>

		<label for="password">Indiquer votre nom complet</label><br>
		<input type="text" name="password" placeholder="your name"><br>

		<button type="submit" @click="NewUser" name="button">valider</button>
	</form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Signin',
  data () {
    return {

    }
  }
}
</script>
