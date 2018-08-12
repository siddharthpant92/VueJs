<template>
	<div id="app">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<router-link class="nav-link" :to="'/'">Home</router-link>
				</li>
				<li class="nav-item">
					<!-- <a class="nav-link" href="#/">Posts</a> -->
					<router-link class="nav-link" :to="'/posts'">Posts</router-link>
				</li>
			</ul>
		</nav>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	// import HelloWorld from './components/HelloWorld'
	import Posts from './components/Posts'

	export default 
	{
		name: 'App',
		components: 
		{
			// HelloWorld,
			Posts
		}
	}
</script>

<style>
	@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
