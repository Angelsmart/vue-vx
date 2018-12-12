import * as Types from './mutations-types';

const mutations = {
	[Types.ADD_COUNT](state){
        state.count+=10
    },
    except(state){
        state.num*=2
    },
    minucount(state,param){
      //state.countA-=param;
      state.countA =param.a+param.b
    }
}
export default mutations
