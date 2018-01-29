<template>
	<div class="content">
		<div class="left">
			<h1>Salons :</h1>
			<button class="actualiseChannels" @click="getChannel">Actualiser</button>
			<ul>
				<li v-for="(item) in channels">
					<div class="channelTitle" id="item" v-on:click="getContentChannel('item[3]','item[0]' ,'item[1]')">
						<h4>{{item.label}}</h4>
						<!-- <p>{{item}}</p> -->

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
			<form class="inputChat"  method="post">
				<input class="msg" type="text" name="" >
				<button type="submit" name="button">Send</button>
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
			topic : ""
    }
  },
	methods: {
		getChannel () {
			this.content = ""
			this.topic = ""
			this.title = ""
			this.channels ;

		  api.get('/channels?token=c661950366d9e7ca6279d8166ecb386241dab849').then(response => {
				// success callback
				this.channels = response.data

				console.log(response.data);


			}, response => {
				// error callback
				console.log("error = "+response.message)
				console.log(ls.get(['token']))
			})
		},

		getContentChannel (IDChannel , titleName, topicName) {
			api.get('/channels/'+IDChannel+'/posts?token='+ls.get(['token'])).then(response => {
				// success callback
				this.content = "blablabla"
				this.topic = topicName
				this.title = titleName

			}, response => {
				// error callback
				this.content += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel nunc vel massa placerat imperdiet ac ut libero. Nunc bibendum elit ac nibh gravida, non efficitur est mattis. Nunc pellentesque, leo nec tempor fermentum, justo magna ullamcorper mi, eget feugiat augue leo sit amet tortor. Sed aliquam, orci eget dapibus condimentum, ante est commodo diam, in commodo enim quam vel felis. Mauris sed purus eget nunc dictum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi sollicitudin in mi id accumsan. Donec sem massa, feugiat sed volutpat ut, volutpat quis nibh. Curabitur ac lorem sed eros eleifend condimentum ac id tellus. Praesent porta eu ipsum sed cursus. Sed odio turpis, faucibus nec malesuada eget, sollicitudin sit amet felis. Quisque bibendum sapien vel laoreet semper. Fusce ac est non mi gravida eleifend vel vitae enim. Curabitur eget orci vestibulum neque malesuada ornare. Aliquam  hendrerit non "
				this.topic = topicName
				this.title = titleName


			})

		}

  },
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
	.channelTitle h4{
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
