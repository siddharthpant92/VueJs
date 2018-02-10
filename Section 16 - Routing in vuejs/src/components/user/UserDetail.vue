<template>
	<div>
    	<h3>Some User Details</h3>
    	<p>Loaded id = {{$route.params.id}}</p>
    	<hr>
    	<router-link
    		tag="button"
    		:to="link"
    		class="btn btn-primary">
    			Edit User {{$route.params.id}}
    	</router-link>
    </div>
</template>

<script type="text/javascript">
    export default {
        data: function()
        {
            return {
                link: {
                        name: 'userEdit', 
                        params: {
                                id: this.$route.params.id
                            },
                        query: {
                                locale: 'en', q: 100
                            }
                    }
            }
        }
    }
</script>