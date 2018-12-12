const user = {
	
	namespaced: true,
  state: {
  		username:'admin'
  },
  mutations: {
  	minucount(state,parm){
  		state.username = parm
  	}
  },
  actions: {
  	
  },
  getters: {
  	
  }
}
export  default user