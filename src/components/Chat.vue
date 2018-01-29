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
			<div class="chatContent">
				{{content}}
			</div>
			<form class="inputChat">
				<input class="msg" type="text" name="" >
				<button type="submit" name="button" v-on:click="postContentChannel('item[3]', 'msg')">Send</button>
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

				console.log(response.data);


			}, response => {
				// error callback
				console.log("error = "+response.message)
				console.log(ls.get(['token']))
			})
		},

<<<<<<< HEAD
		getContentChannel (channel , topicName , labelName ) {
			api.get('/channels/'+channel+'/posts?token='+ls.get(['token'])).then(response => {
=======
		getContentChannel (IDChannel , titleName, topicName) {
			api.get('/channels/'+IDChannel+'/posts?token=:'+ls.get(['token'])).then(response => {
>>>>>>> f93dd06152dc71b99ed57511e42f62d9f53fd6b8
				// success callback
				this.content = response
				this.topic = topicName
				this.title = labelName

			}, response => {
				// error callback
				console.log(response)
				this.content = ""
				this.topic = topicName
				this.title = labelName


			})

		},

		postContentChannel (IDChannel, message) {
			api.post('/channels/'+IDChannel+'/posts?token=:'+ls.get(['token']), message).then(response => {

			})
		}

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

</style>
