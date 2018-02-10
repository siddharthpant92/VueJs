<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Value of counter before getters: {{numClicks}}</p>    
    </div>
    
</template>

<script>
    import {mapGetters} from 'vuex';
    
    export default {
        computed: 
        {
        	counter: function()
        	{
        		return this.$store.getters.doubleCounter;
        	},
            numClicks: function()
            {
                return this.$store.getters.stringCounter;
            }
        }
    }
</script>