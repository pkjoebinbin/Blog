import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state={
	count:10,
};

const mulations={
	increment(state){
		state.count++;
	}
};

const actions={
	increment :({
		commit
		}) => {
		commit('increment')
	}
}


export default new Vuex.Store({
	actions,
	mulations,
	state,
})

