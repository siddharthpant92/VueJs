<template>
	<div>
	    <h1>The User Page</h1>
	    <hr>
	    <button @click="navigateToHome" class="btn btn-primary">Go Home</button>
	    <hr>
	    <router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default
	{
		
		methods:
		{
			navigateToHome: function()
			{
				this.$router.push('/');
			}
		}
	}
</script>