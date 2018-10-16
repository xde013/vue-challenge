import {actions, mutations, getters} from './store'
import { testAction } from '@/tests/unit/actionsTestHelper'
let todos
let initialState
let todo
beforeEach(() => {
  todo = {text: 'Buy Milk', checked: false, createdAt: new Date()}
  todos = [
    {
      text: 'Think real hard about whats for lunch',
      checked: true,
      createdAt: new Date(Date.now() - 3600)
    },
    {
      text: 'Buy some Pantos and start looking for Lambos',
      checked: false,
      createdAt: new Date(Date.now() - 7200)
    }
  ]
  initialState = {
    todos
  }
})

describe('TodoStore', () => {
  describe('mutations', () => {
    it('addTodo', () => {
      // Act
      mutations.addTodo(initialState, todo)
      // Assert
      expect(initialState.todos).toContain(todo)
    })
    it('deleteTodo', () => {
      // Arrange
      initialState.todos.push(todo)
      // Act
      mutations.removeTodo(initialState, todo)
      // Assert
      expect(initialState.todos).not.toContain(todo)
    })
  })
  describe('actions', () => {
    it('addTodo', done => {
      testAction(actions.addTodo, todo, initialState, [
        { type: 'addTodo', payload: todo }
      ], done)
    })
    it('removeTodo', done => {
      testAction(actions.removeTodo, todo, initialState, [
        { type: 'removeTodo', payload: todo }
      ], done)
    })
  })

  describe('getters', () => {
    it('doneTodos', () => {
      // Act
      const results = getters.doneTodos(initialState)
      // Assert
      expect(results).toBeDefined()
      for (const result of results) {
        expect(result.checked).toBeTruthy()
      }
    })
    it('unDoneTodos', () => {
      // Act
      const results = getters.unDoneTodos(initialState)
      // Assert
      expect(results).toBeDefined()
      for (const result of results) {
        expect(result.checked).toBeFalsy()
      }
    })
    it('sortedTodos', () => {
      // Arrange
      const doneTodos = [ todos[0] ]
      const unDoneTodos = [ todos[1] ]
      // Act
      const result = getters.sortedTodos(initialState, {doneTodos, unDoneTodos})
      // Assert
      expect(result).toEqual([todos[1], todos[0]]
      )
    })
  })
})
