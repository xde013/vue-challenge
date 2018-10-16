import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ToDoList from '@/components/ToDoList.vue'
import ToDoItem from '@/components/ToDoItem.vue'
import { defaultState, getters, mutations, actions } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ToDoList.vue', () => {
  let store
  let localConfig
  beforeEach(() => {
    store = new Vuex.Store({
      state: defaultState,
      getters: getters,
      mutations: mutations,
      actions: actions
    })
    localConfig = { store, localVue }
  })

  it('renders todo-item for each item in todos', () => {
    const wrapper = shallowMount(ToDoList, localConfig)
    expect(wrapper.findAll(ToDoItem)).toHaveLength(store.state.todos.length)
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(ToDoList, localConfig)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
