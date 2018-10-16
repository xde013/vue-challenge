import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ToDoInput from '@/components/ToDoInput.vue'
import { defaultState, getters, mutations, actions } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const factory = (options = {}) => {
  return shallowMount(ToDoInput, options)
}

describe('ToDoList.vue', () => {
  let store
  let localConfig
  beforeEach(() => {
    store = new Vuex.Store({
      state: defaultState,
      getters,
      mutations,
      actions
    })
    localConfig = { store, localVue }
  })

  it('dispatch addToDo when button is clicked', () => {
    const mockStore = { dispatch: jest.fn() }
    const wrapper = factory({mocks: { $store: mockStore }})
    const textInput = wrapper.find('input[type="text"]')
    textInput.setValue('Buy Milk')
    wrapper.find('.submit-button').trigger('click')
    expect(mockStore.dispatch).toHaveBeenCalled()
  })
  it('do not allow disptach addTodo when text is empty', () => {
    const mockStore = { dispatch: jest.fn() }
    const wrapper = factory({mocks: { $store: mockStore }})
    const textInput = wrapper.find('input[type="text"]')
    textInput.setValue('')
    wrapper.find('.submit-button').trigger('click')
    expect(mockStore.dispatch).not.toHaveBeenCalled()
  })
  it('matches snapshot', () => {
    const wrapper = shallowMount(ToDoInput, localConfig)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
