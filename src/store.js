import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutations = {
  addTodo: (state, payload) => {
    state.todos.unshift(payload)
  },
  updateTodo: (state, payload) => {
    // TODO
  },
  removeTodo: (state, payload) => {
    // TODO
  }
}

export const actions = {
  addTodo: ({commit}, payload) => {
    commit('addTodo', payload)
  },
  updateTodo: ({commit}, payload) => {
    commit('updateTodo', payload)
  },
  removeTodo: ({commit}, payload) => {
    commit('removeTodo', payload)
  }
}

export const defaultState = {
  todos: [
    {
      text: 'Think real hard about whats for lunch',
      checked: false,
      createdAt: new Date(Date.now() - 3600)
    },
    {
      text: 'Buy some Pantos and start looking for Lambos',
      checked: false,
      createdAt: new Date(Date.now() - 7200)
    }
  ]
}

export default new Vuex.Store({
  state: defaultState,
  mutations,
  actions
})
