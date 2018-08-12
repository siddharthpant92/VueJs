<template>
	<div class="container">
		<table class="table table-striped mt-4">
			<thead>
				<tr>
					<th scope="col">Id</th>
					<th scope="col">Title</th>
					<th scope="col">Body</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="post in posts" :key="post.id">
					<th scope="row">{{post.id}}</th>
					<td>{{post.title}}</td>
					<td>{{post.body}}</td>
				</tr>
			</tbody>
		</table>
		<button class="btn btn-primary">Click</button>
	</div>
	
</template>


<script type="text/javascript">
	import axios from 'axios';

	export default
	{
		name: "Posts",
		data()
		{
			return {
				posts: []
			}
		},
		created()
		{
			axios.get("https://jsonplaceholder.typicode.com/posts").then(posts => {
				this.posts = posts.data
			});
		}
	}
</script>


<style type="text/css">
	
</style>