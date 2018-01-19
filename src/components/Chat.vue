<template>
	<div class="content">
		<div class="right">
			<h1>Salons :</h1>
		</div>
		<div class="left">
			<h1>Discussion</h1>
		</div>
	</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Chat',
  data () {
    return {

    }
  },
	methods: {

  },
}
</script>

<style scoped>
	.right{
		display: inline-block;
		height: 100%;
		margin: -10px 0 -10px -10px;
		padding: 10px;
		width: 20%;
		min-width: 175px;
		background-color: pink;
	}
	.left{
		display: inline-block;
	}
	.content{
		height: 100%;
	}
</style>
