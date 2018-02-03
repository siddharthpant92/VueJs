<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                	<input class="form-control" v-model="user.username"></input>
                </div>
                <div class="form-group">
                	<label>Mail</label>
                	<input class="form-control" v-model="user.email"></input>
                </div>
                <button class="btn" @click="submit">Submit</button>
                <hr>

                <button class="btn" @click="fetch">Get data</button>
                <br><br>
                <ul class="list-group">
                	<li class="list-group-item" v-for="u in users">
                		{{u.username}}: {{u.email}}
                	</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	data()
    	{
    		return {
    			user: 
    			{
    				username: '',
    				email: ''
    			},
    			users: []
    		}
    	},
    	methods:
    	{
    		submit()
    		{
    			// $http available through VueResource in main.js
    			
    			//url is empty because deafult url is defined globally. But you can append something like /test to the global url by simply putting '/test' here
    			this.$http.post('', this.user).then(response => {
    				console.log(response);
    			}, error => {
    				console.log(error);
    			}); 
    		},
    		fetch()
    		{
    			this.$http.get('https://vuejs-http-da062.firebaseio.com/data.json').then(response =>
    			{
    				return response.json();
    			}).then(data=> {
    				const resultArray = [];
    				for (let key in data)
    				{
    					resultArray.push(data[key]);
    				}
    				this.users = resultArray;
    			});
    		}
    	}
    }
</script>

<style>
</style>
