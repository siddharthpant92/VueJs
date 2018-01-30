<template>
	<div class="col-sm-6 col-md-4 col-lg-3">
		<div class="panel panel-body quote">
			<slot></slot>
		</div>
	</div>
</template>


<script type="text/javascript">
	export default
	{
		props: ['quotes']
	}
</script>

<style type="text/css">
	.panel-body
	{
		font-family: 'Arizonaia', cursive;
		font-size: 24px;
		color: #6e6e6e;
	}

	.quote
	{
		cursor: pointer;
	}

	.quote:hover
	{
		background-color: red;
	}
</style>