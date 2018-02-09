<template>
	<div>
    	<h3>Some User Details</h3>
    	<p>Loaded id = {{$route.params.id}}</p>
    	<hr>
    	<router-link
    		tag="button"
    		:to="{name: 'userEdit', params: {id: $route.params.id}}"
    		class="btn btn-primary">
    			Edit User {{$route.params.id}}
    	</router-link>
    </div>
</template>