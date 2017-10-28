import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchTodos } from './reducers/todo/action-creators'

class App extends Component {
  componentDidMount () {
    const { searchTodos } = this.props

    searchTodos()
  }
  
  render () {
    const { todos } = this.props

    return (
      <div>
        {todos.map((todo, index) => (
          <span key={index}>{todo.name}</span>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ todo }) => ({
  todos: todo.todos
})

export default connect(mapStateToProps, { searchTodos })(App)