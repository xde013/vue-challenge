import Vue from 'vue'
import Vuex from 'vuex'
import { todos } from '@/mockData'
Vue.use(Vuex)

export const mutations = {
  addTodo: (state, payload) => {
    state.todos.unshift(payload)
  },
  updateTodo: (state, payload) => {
    // TODO
  },
  removeTodo: (state, payload) => {
    for (const [index, todo] of state.todos.entries()) {
      if (todo.createdAt.getTime() === payload.createdAt.getTime()) {
        state.todos.splice(index, 1)
        break
      }
    }
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

export const defaultState = { todos }

export const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.checked)
  },
  unDoneTodos: state => {
    return state.todos.filter(todo => !todo.checked)
  },
  sortedTodos: (state, getters) => {
    return [...getters.unDoneTodos, ...getters.doneTodos.reverse()]
  }
}

export default new Vuex.Store({
  state: defaultState,
  getters,
  mutations,
  actions
})
