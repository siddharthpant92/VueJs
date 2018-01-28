<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!serverItemExists">Server Details are currently not updated</p>
        <div v-else>
        	<p>Updated server details:</p>
        	<p>Server ID: {{serverItem.id}}</p>
        	<p>Server status: {{serverItem.status}}</p>
        	<button @click="setServerStatus"> Set server #{{serverItem.id}} to normal </button>
        </div>
    </div>

</template>

<script>
	import {eventBus} from '../../main.js';
	export default
	{
		data: function()
		{
			return {
				serverItemExists: false, //when a server has been added form SererItem.vue
				serverItem: []
			}
		},
		methods:
		{
			setServerStatus: function()
			{
				this.serverItem.status="normal"
			}
		},
		created: function()
		{
			eventBus.$on('addServerItem', (serverItem)=>{
				this.serverItem = serverItem;
				this.serverItemExists = true;
			})
		}
	}
</script>

<style>

</style>
