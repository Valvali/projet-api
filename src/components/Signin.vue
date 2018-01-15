<template>
	<form action="/signin">
  Login:<br>
  <input type="text" name="login" value="login">
  <br>
  Password:<br>
  <input type="text" name="password" value="password">
  <br><br>
  <input type="submit" value="Submit">
</form> 
</template>

<script>

export default {
  name: 'Signin',
  data () {
    return {
 
    }
  }
}
</script>