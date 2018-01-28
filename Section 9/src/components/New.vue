<template>
	<div>
		<h3>New Quote</h3>
		<button @click="counter++">Increment, to see if component is destroyed when replaced or not</button>
		{{counter}}
	</div>
	
</template>

<script>
	export default
	{
		data: function()
		{
			return	{
				counter: 0
			}
		},
		deactivated()
		{
			console.log("deactivated");
		},
		activated()
		{
			console.log("activated");
		}
	}
</script>

<style scoped>

</style>