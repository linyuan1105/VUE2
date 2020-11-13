const modueleA = {
    state: {
      count: 0,
      name:'linyuanA',
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    },
    getters:{},
    mutations: {
      increment (state) {
        state.count++
      },
      increment10 (state) {
        state.count+=10
      }
    },
    actions: {
      increment ({commit,state,dispatch}) {
        dispatch('increment10')
      },
      increment ({commit,state,dispatch}) {
        commit('increment10')
      }
    }
  }
export {
    modueleA
}