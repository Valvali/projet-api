<template>
	<div class="content">
		<div class="left">
			<h1>Salons :</h1>
			<button class="actualiseChannels"@click="refreshContent">Actualiser</button>
			<ul>
				<li v-for="(item) in channels">
					<div class="channelTitle" :id='item._id' @click="getContentChannel(item._id , item.label , item.topic)">
						<h4>{{item.label}}</h4>
					 	<p>{{item.topic}}</p>
					</div>
					<button type ="submit" class="deletechannel" @click="deleteChannel(item._id)">-</button>
				</li>
			</ul>
			<button type="button" @click="switchNewChannel()">Ajout de canal</button>
			<form v-if="newchannel"  class="newChannel" @submit="postNewChannel(nchannel, schannel)" >
				<input class="nchannel" placeholder="Nom du canal" type="text" v-model='nchannel'>
				<input class="schannel" placeholder="Sujet du canal" type="text" v-model='schannel'>
				<button type="submit"  >Ajouter un canal</button>
			</form>
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
			<form class="inputChat"  @submit="postContentChannel( msg )">
				<input class="msg" type="text" v-model='msg' :disabled="title == ''" >
				<button type="submit" >Send</button>
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
    	nchannel: "",
    	schannel: "",
			msg: '',
			channels:[],
			content: "",
			title : "",
			topic : "",
			currentContentID : null,
			newchannel : false
    }
  },
	methods: {
		getChannel () {
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
		/* async */ getNameUserViaID(id) {
			let memory = id ;
			/*await api.get('members/'+id+'/signedin?token='+ls.get(['token'])).then(response => {
				// success callback
				console.log(response.data.fullname);
				memory = response.data.fullname    //doesn't work 
			})*/
			return memory
		},

		async postContentChannel (msg) {
			if(msg){
				//need wait the end of the request !!!!!!!!
				await api.post('/channels/'+this.currentContentID+'/posts?token='+ls.get(['token']), {"message" :  msg}).then(function (response) {
	    		console.log(response);
	  		})
			}
			this.refreshContent();
			this.msg = ""
		},
		refreshContent() {
			this.getChannel();
			this.getContentChannel (this.currentContentID , this.topic , this.title )
		},

		async postNewChannel(label, topic) {
			if(label == "" || topic== "") {
				console.log("Error : Empty topic or label")
			}else {
			await api.post('/channels/?token='+ls.get(['token']), {"label" : label, "topic" : topic}).then(function (response) {
    				console.log(response);
  				})

			}
			this.nchannel = ""
			this.schannel = ""
			this.refreshContent();
		},

		switchNewChannel() {
			this.newchannel = !this.newchannel
		},

		async deleteChannel(IDchannel) {
			await api.delete('/channels/'+IDchannel+'?token='+ls.get(['token'])).then(function (response) {
    				console.log(response);
  				})
			this.refreshContent();
		}

  },
	created: function () {
		this.refreshContent();
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
		display: inline-block;
		width:80%;
		border-style: dotted;
		border-width: thin;
		padding-left: 10px;
		margin-bottom: 2px;
	}
	.channelTitle h4{
		display: inline;
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

	.deletechannel{
		cursor: pointer;
		vertical-align: top;
	  text-align: center;
	  background-color: red;
	  color: white;
	}
</style>
