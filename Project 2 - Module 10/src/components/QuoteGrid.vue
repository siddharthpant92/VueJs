<template>
	<div class="row">
		<app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
			{{quote}}
		</app-quote>
	</div>
</template>


<script type="text/javascript">
	import Quote from './Quote.vue'
	export default
	{
		props: ['quotes'],
		components:
		{
			'app-quote': Quote
		},
		methods:
		{
			deleteQuote: function(index)
			{
				this.$emit('quoteDeleted', index);
			}
		}
	}
</script>

<style type="text/css">
	
</style>