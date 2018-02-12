import stocks from '../../data/stocks';

const state = 
{
	stocks: []
};

const mutations = 
{
	'SET_STOCKS'(state, stocks)
	{
		//setting the state of stocks to the data
		state.stocks = stocks;
	},
	'RND_STOCKS'(state)
	{
		state.stocks.forEach(stock=> {
			stock.price = Math.round(stock.price * (Math.random() + 0.5));
		});
	}
};

const actions = 
{
	buyStock: function(context, order)
	{
		context.commit('BUY_STOCK', order);
	},
	initStocks: function(context)
	{
		//initialising stocks from the data folder. Called when App.vue is created
		context.commit('SET_STOCKS', stocks);
	},
	randomizeStocks: function(context)
	{
		context.commit('RND_STOCKS');
	}
};

const getters =
{
	stocks: function(state)
	{
		//returning whatever the state of stocks was set to
		return state.stocks;
	}
};

export default
{
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions
}