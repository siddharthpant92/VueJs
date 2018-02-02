<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{switchName()}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">Reset Name using Emit</button>
        <button @click="resetFn()">Reset Name using callback from parent</button>
    </div>
</template>

<script>
	import {eventBus} from '../main';
	export default
	{
		props: 
		{
			// username: String
			username: {
				type: String,
				// required: true,
				default: "Siddharth" 
			},
			resetFn: Function,
			userAge: Number
		},
		methods:
		{
			switchName: function()
			{
				return this.username.split("").reverse().join("");
			},
			resetName: function()
			{
				this.username = "Sid";
                this.$emit('nameWasReset',
                    this.username);
			}
		},
		created: function()
		{
			eventBus.$on('ageWasEdited', (age)=>{
				this.userAge = age;
			})
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
