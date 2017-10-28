import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './app'
import reducers from './reducers'

const Root = () => (
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
)

export default Root