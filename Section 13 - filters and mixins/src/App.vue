<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | to-uppercase }}</p>
                <p>{{text | to-uppercase | to-lowercase}}</p>
                <br><br>
                <button @click="fruits.push('Berries')">Add new item</button>
                <input v-model="filterText">
                <ul>
                	<li v-for="fruit in filteredFruits">
                		{{fruit}}
                	</li>
                </ul>
                <hr><hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
	import List from './List.vue'
	import {fruitMixin} from './fruitMixin.js'
    export default {
    	mixins: [fruitMixin],
    	components:
    	{
    		'app-list': List
    	},
    	data()
    	{
    		return {
    			text: "Hello There!",
    			
    		}
    	},
    	filters:
    	{
    		'to-uppercase'(value)
    		{
    			return value.toUpperCase();
    		}
    	},
    	
    }
</script>

<style>

</style>
