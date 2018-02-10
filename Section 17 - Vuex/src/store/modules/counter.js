const state = 
{
	counter: 0,		
};

const getters = 
{
	doubleCounter: function(state)
	{
		return state.counter*2;
	},
	stringCounter: function(state)
	{
		return state.counter+' clicks';
	},
};

const mutations = 
{
	increment: function(state, value)
	{
		console.log("mutation: "+value);
		state.counter+= value;
	},
	decrement: function(state, value)
	{
		state.counter -= value;
	},
};

const actions = 
{
	increment: function(context)
	{
		context.commit('increment', 1);
	},
	decrement: function(context)
	{
		context.commit('decrement', 1);
	},
	asyncIncrement: function(context, payload)
	{
		setTimeout(()=> {
			context.commit('increment', payload.value);
		}, payload.duration)
	},
	asyncDecrement: function(context, payload)
	{
		setTimeout(()=> {
			context.commit('decrement', payload.value);
		}, payload.duration)
	},
};

export default
{
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions
}