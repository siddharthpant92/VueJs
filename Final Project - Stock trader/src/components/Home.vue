<template>
	<div>
		<h1>Trade or View Portfolio</h1>
		<h6>You may save and load your data</h6>
		<h6>Click on 'End Day' to begin new day</h6>
		<hr>
		<p>Your funds: {{funds| currency}}</p>
	</div>
</template>

<script type="text/javascript">
	export default
	{
		computed:
		{
			funds: function()
			{
				return this.$store.getters.funds;
			}
		}
	}
</script>