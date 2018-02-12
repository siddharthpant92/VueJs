const state = 
{
	funds: 10000,
	stocks: [] //stocks bought, not all stocks
};

const mutations = 
{
	'BUY_STOCK': function(state, {stockId, quantity, stockPrice}) //These values are from {order} in stocks/Stock.vue
	{
		const record  = state.stocks.find(element => element.id == stockId);
		if(record)
		{
			record.quantity += quantity;
		}
		else
		{
			state.stocks.push(
			{
				id: stockId,
				quantity: quantity
			})
		}
		state.funds -= stockPrice*quantity;
	},
	'SELL_STOCK': function(state, {stockId, quantity, stockPrice})
	{
		const record  = state.stocks.find(element => element.id == stockId);
		if(record.quantity > quantity)
		{
			record.quantity -= quantity;
		}
		else
		{
			state.stocks.splice(state.stocks.indexOf(record), 1);
		}
		state.funds += stockPrice*quantity;
	},
	'SET_PORTFOLIO': function(state, portfolio)
	{
		state.funds = portfolio.funds;
		state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio: []
	}
};

const actions = 
{
	sellStock: function(context, order)
	{
		context.commit('SELL_STOCK', order);
	}
};

const getters = 
{
	stockPortfolio: function(state, getters)
	{

		return state.stocks.map(stock=> {
			const record = getters.stocks.find(element=>element.id == stock.id);
			return {
				id: stock.id,
				quantity: stock.quantity,
				name: record.name,
				price: record.price
			}
		});
	},
	funds: function(state)
	{
		return state.funds;
	}
};

export default
{
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions
}