<template>
	<div>
    	<h3>Some User Details</h3>
    	<p>Loaded id = {{$route.params.id}}</p>
    	<button @click="$router.push('/user')" class="btn btn-primary">Go to users</button>
    </div>
</template>