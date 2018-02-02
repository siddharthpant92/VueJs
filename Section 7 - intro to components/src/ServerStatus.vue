<template>
	<div class="server-status">
		<p>Server status: {{status}}</p>
		<button @click="changeStatus">
			Change status
		</button>
		<hr>
	</div>
</template>

<script>
	export default
	{
		data: function()
		{
			return {
				status: "random"
			}
		},
		methods: 
		{
			changeStatus: function()
			{
				this.status = "normal"
			}
		}
	}
</script>