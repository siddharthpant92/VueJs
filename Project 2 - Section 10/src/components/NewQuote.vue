<template>
	<div class="row">
		<form>
			<div class="col-sm-8 sol-sm-offset-2 form-group">
				<label>Quote</label>
				<textarea class="form-control" rows="3" v-model="quote"></textarea>
			</div>
			<div class="col-sm-8 sol-sm-offset-2 form-group">
				<button class="btn-primary" @click.prevent="createNew">Submit Quote</button>
			</div>
		</form>
	</div>
</template>


<script type="text/javascript">
	export default
	{
		data: function()
		{
			return {
				quote: ''
			}
		},
		methods:
		{
			createNew: function()
			{
				this.$emit('quoteAdded', this.quote);
				this.quote = '';
			}
		}
	}
</script>

<style type="text/css">
	
</style>