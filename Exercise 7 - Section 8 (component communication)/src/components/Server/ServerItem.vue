<template>
	   <li class="list-group-item">
        Server #{{ serverItem.id }}
        <br>
        Status: {{serverItem.status}}
        <br>
        <button @click="addServer">Add server</button>
    </li>
</template>

<script>
	import {eventBus} from '../../main.js';
	export default
	{
		props: ['serverItem'],
		methods:
		{
			addServer: function()
			{
				eventBus.displayServerItem(this.serverItem)
			}
		}
	}
</script>

<style>

</style>
