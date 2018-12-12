import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import user from './module/user'

import mutations from './store/mutations'
import actions from './store/actions'
import getters from './store/getters'

export default new Vuex.Store({
  state: {
     count:1,
     num:2,
     countA:3
  },
  mutations,
  actions,
  getters,
  modules:{
  	user:user
  }
});
