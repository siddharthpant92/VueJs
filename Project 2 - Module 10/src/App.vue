<template>
    <div class="container">
    	<header-quotes :quoteCount="quotes.length" :maxQuote="maxQuotes"></header-quotes>
    	<new-quote @quoteAdded="addQuote"></new-quote>
    	<hr>
    	<div class="row text-center">
    		<div class="alert alert-info">
    			Click on quote to delete
    		</div>
    	</div>
    	<quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
    </div>
</template>

<script>
	import QuoteGrid from './components/QuoteGrid.vue'
	import NewQuote from './components/NewQuote.vue'
	import Header from './components/Header.vue'
    export default {
        data: function()
        {
        	return{
        		quotes: [
        			'1st quote',
        			'2nd quote'
        		],
        		maxQuotes: 10
        	}
        },
        components:
        {
        	'quote-grid': QuoteGrid,
        	'new-quote': NewQuote,
        	'header-quotes': Header
        },
        methods:
        {
        	addQuote: function(newQuote)
        	{
        		if(this.quotes.length>=this.maxQuotes)
        		{
        			alert("Delete a quote before adding new one");
        		}
        		else
        		{
        			this.quotes.push(newQuote);
        		}
        	},
        	deleteQuote: function(index)
        	{
        		this.quotes.splice(index, 1);
        	}
        }
    }
</script>

<style>
</style>
