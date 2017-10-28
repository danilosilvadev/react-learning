'use strict'

import { SEARCH_TODOS } from './actions'

const initialState = {
  todos: []
}

const todo = (state = initialState, action) => {
  switch(action.type){
    case SEARCH_TODOS:
      return {
        ...state,
        todos: action.payload
      }
  }

  return state
}

export default todo