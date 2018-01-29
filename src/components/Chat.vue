<template>
	<div class="content">
		<div class="left">
			<h1>Salons :</h1>
			<button class="actualiseChannels" @click="getChannel">Actualiser</button>
			<ul>
				<li v-for="(item) in channels">
					<div class="channelTitle" :id='item._id' @click="getContentChannel(item._id , item.label , item.topic)">
						<h4>{{item.label}}</h4>
					 	<p>{{item.topic}}</p>

					</div>
				</li>
			</ul>
		</div>
		<div class="right">
			<h1>Discussion</h1>
			<h2>{{title}}</h2>
			<p><strong>Topic : </strong>{{topic}}</p>
			<div class="textContent">
				<li v-for="(item) in content">
					<p><strong>{{getNameUserViaID(item.member_id)}} :</strong> {{item.message}}</p> <!--{{item.member_id}}-->
				</li>
			</div>
			<form class="inputChat" @submit="postContentChannel( message )">
				<input class="msg" type="text" v-model="message" >
				<button type="submit" name="button" >Send</button>
			</form>
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
			content: "cliquez sur un salon pour commencer à discuter",
			title : "",
			topic : "",
			currentContentID : null
    }
  },
	methods: {
		getChannel () {
			this.content = ""

			this.topic = ""
			this.title = ""

		  api.get('/channels?token='+ls.get(['token'])).then(response => {
				// success callback
				this.channels = response.data

			}, response => {
				// error callback
				console.log("error = "+response.message)
			})
		},

		getContentChannel (channel , topicName , labelName ) {
			this.currentContentID = channel
			api.get('/channels/'+channel+'/posts?token='+ls.get(['token'])).then(response => {
				// success callback
				this.content = response.data
				this.topic = topicName
				this.title = labelName

			}, response => {
				// error callback
				console.log(response.message)
				this.content = ""
				this.topic = topicName
				this.title = labelName


			})

		},
		getNameUserViaID(id) {
			let memory = id ;
			api.get('members/'+id+'/signedin?token='+ls.get(['token'])).then(response => {
				// success callback
				console.log(response.data.fullname);
			})
			return memory
		},


		postContentChannel (message) {

			api.post('/channels/'+this.currentContentID+'/posts?token='+ls.get(['token']), {"message" :  message}).then(function (response) {
    				console.log(response);
  				})
		},

  },
	created: function () {
		this.getChannel();
	}
}
</script>

<style scoped>
	.left{
		display: inline-block;
		height: 88%;
		margin: -10px 0 -10px -10px;
		padding: 10px;
		width: 20%;
		min-width: 175px;
		background-color: pink;
	}
	.right{
		display: inline-block;
		vertical-align: top;
		width: 78%;
	}
	.right p{
		margin: 5px;
	}
	.content{
		height: 100%;
		text-align: left;
	}
	ul {
		overflow-y: scroll;
		padding-left: 0;
	  list-style-type: none;
		max-height: 680px;;
	}
	.channelTitle{
		border-style: dotted;
		border-width: thin;
		padding-left: 10px;
		margin-bottom: 2px;
	}
	.channelTitle:hover{
		cursor: pointer;
		background-color: rgba(153, 204, 255, 0.90);
	}
	.chatContent{
	overflow-y: scroll;
	height: 600px;
	width: 100%
	}
	.msg{
		width: 90%
	}
	.textContent{
		list-style-type: none;
	}
</style>
