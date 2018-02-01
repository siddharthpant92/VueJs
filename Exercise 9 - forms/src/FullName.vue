<template>
	<div>
		<label for="firstName"> First Name: 
            <input type="text" 
                    class="form-control"
                    v-model="firstName">
        </label>

        <label for="lastName"> Last Name: 
            <input type="text" 
                    class="form-control"
                    v-model="lastName">
        </label>
        <button class="btn btn-primary" @click.prevent="getName"> Use name from child component instead of from Exercise 1</button>
	</div>
</template>

<script type="text/javascript">
	export default
	{
		props: ['value'],
		data: function()
		{
			return {
				firstName: '',
				lastName: ''
			}
		},
		methods:
		{
			getName: function()
			{
				// console.log();
				this.$emit('input', {
					firstName: this.firstName,
					lastName: this.lastName
				})
			}
		}
	}
</script>