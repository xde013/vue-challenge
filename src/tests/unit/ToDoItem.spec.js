import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ToDoItem from '@/components/ToDoItem.vue'
import { todos } from '@/mockData'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ToDoItem.vue', () => {
  it('renders props.todo when passed', () => {
    const todo = todos[0]
    const wrapper = shallowMount(ToDoItem, {propsData: { todo }})
    expect(wrapper.props().todo).toBe(todo)
    expect(wrapper.find('.todo-text').text()).toBe(todo.text)
  })
  it('matches snapshot', () => {
    const wrapper = shallowMount(ToDoItem, {propsData: {todo: todos[0]}})
    expect(wrapper.html()).toMatchSnapshot()
  })
})
