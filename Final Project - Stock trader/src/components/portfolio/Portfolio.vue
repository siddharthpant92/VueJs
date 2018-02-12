<template>
	<div>
		<app-stock v-for="stock in stocks" :stock="stock"></app-stock>
	</div>
</template>

<script type="text/javascript">
	import {mapGetters} from 'vuex';
	import Stock from './Stock.vue';

	export default
	{
		computed: 
		{
			...mapGetters({
				stocks: 'stockPortfolio'
			})
		},
		components:
		{
			'app-stock': Stock
		}
	}
</script>