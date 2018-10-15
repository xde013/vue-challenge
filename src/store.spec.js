import {mutations} from './store'

let initialState

beforeEach(() => {
  initialState = {
    todos: []
  }
})

describe('TodoStore', () => {
  it('addTodo', () => {
    // Arrange
    const testTodo = {
      text: 'addTodoTest',
      checked: true,
      createdAt: new Date()
    }
    // Act
    mutations.addTodo(initialState, testTodo)
    // Assert
    expect(initialState).toEqual({
      todos: [
        testTodo
      ]
    })
  })
  it('deleteTodo', () => {
    // Arrange
    const testTodo = {
      text: 'addTodoTest',
      checked: true,
      createdAt: new Date()
    }
    initialState.todos.push(testTodo)

    // Act
    mutations.removeTodo(initialState, testTodo)

    // Assert
    expect(initialState.todos).toEqual(
      expect.not.arrayContaining([testTodo])
    )
  })
})
