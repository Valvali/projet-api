<template>
	<div class="content">
		<div class="right">
			<h1>Salons :</h1>
			<button class="actualiseChannels" @click="getChannel">Actualiser</button>
		</div>
		<div class="left">
			<h1>Discussion</h1>
		</div>
	</div>

</template>

<script>
import api from '@/services/api'
import ls  from '@/services/ls'

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Chat',
  data () {
    return {
			channels:[],
    }
  },
	methods: {
		getChannel () {
			this.channels = [];
		  api.get('/channels?token='+ls.get(['token'])).then(response => {
				// success callback
				this.channels.push([response.label, response.topic, response.updated_at])

				console.log(this.channels);


			}, response => {
				// error callback
				console.log("error = "+response.message)
				console.log(ls.get(['token']))


			})
		}

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
		text-align: left;
	}
</style>
