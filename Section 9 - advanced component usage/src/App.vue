<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            	<button @click="selectedComponent='app-quote'">Quote</button>
            	<button  @click="selectedComponent='author'">Author</button>
            	<button  @click="selectedComponent='new-quote'">New Quote</button>
            	<hr>
            	<p>NOT keeping the components alive here</p>
            	<component :is="selectedComponent">
            		<h2 slot="title">{{title}}</h2>
               		<p>Wonderful quote</p>
            	</component>
            	<hr><hr>
            	<p>Keeping the components alive here</p>
            	<keep-alive>
            		<component :is="selectedComponent">
	            		<h2 slot="title">{{title}}</h2>
	               		<p>Wonderful quote</p>
            		</component>
            	</keep-alive>
               <hr>
            </div>
        </div>
    </div>
</template>

<script>
	import Quote from './components/Quote.vue'
	import Author from './components/Author.vue'
	import New from './components/New.vue'
    export default {
    	data: function()
    	{
    		return {
    			title: 'The Quote',
    			selectedComponent: 'new-quote'
    		}
    	},
        components:
        {
        	'app-quote': Quote,
        	'author': Author,
        	'new-quote': New
        }
    }
</script>

<style scoped>

</style>
