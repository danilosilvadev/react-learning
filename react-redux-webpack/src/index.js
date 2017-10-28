import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.getElementById('root'))
}

renderApp(Root)

if(module.hot) {
  module.hot.accept('./root', () => {
    const NextApp = require('./root').default
    renderApp(NextApp)
  })
}