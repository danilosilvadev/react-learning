'use strict'

import { SEARCH_TODOS } from './actions'

export const searchTodos = () => {
    return { type: SEARCH_TODOS, payload: [
        { name: 'task1', done: true },
        { name: 'task2', done: false },
        { name: 'task3', done: false }
    ]}
}