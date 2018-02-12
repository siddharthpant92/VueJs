<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-success">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{stock.name}}
					<small>
						Price: {{stock.price}}
					</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input type="number"
							class="form-control"
							placeholder="Quantity"
							v-model="quantity"
							:class="{danger: insufficientFunds}">
				</div>
				<div class="pull-right">
					<button class="btn btn-success"
							@click="buyStock"
							:disabled="quantity <= 0 || insufficientFunds">
						{{insufficientFunds? 'Insufficient' : 'Buy'}}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default
	{
		props: ['stock'],
		data: function()
		{
			return {
				quantity: 0
			}
		},
		computed:
		{
			funds()
			{
				return this.$store.getters.funds;
			},
			insufficientFunds: function()
			{
				return this.quantity*this.stock.price > this.funds;
			}
		},
		methods:
		{
			buyStock: function()
			{
				const order = 
				{
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};
				this.$store.dispatch('buyStock', order)
				this.quantity = 0;
			}
		}
	}
</script>

<style type="text/css" scoped>
	.danger
	{
		border: 1px solid red;
	}
</style>