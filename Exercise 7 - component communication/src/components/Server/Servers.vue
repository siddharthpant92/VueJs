<template>
    <div class="col-xs-12 col-sm-6">
    	{{selectedServer}}
        <ul class="list-group" v-for="server in servers">
        	<server-item 
        		:serverItem="server"
       			>
        	</server-item>
        </ul>
    </div>
</template>

<script>
	import {eventBus} from '../../main.js';
	export default
	{
		data: function()
		{
			return {
				servers: [
					{id: 1, status: "normal"},
					{id: 2, status: "critical"},
					{id: 3, status: "unknown"},
					{id: 4, status: "normal"}
				],
				selectedServer: ''
			}
		}
	}
</script>

<style>

</style>
