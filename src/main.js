import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'


const defaultState = {
  query: '',
  wikiResult: []
}


let store = createStore(
  rootReducer, 
  defaultState,
  applyMiddleware(Thunk)
)


const Main = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
})

ReactDOM.render(<Main />, document.getElementById('app'));