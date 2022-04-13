import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers/MainReducers'
import App from './App'
import Table from './containers/Table'
import CreateTodo from './containers/CreateTodo'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)(createStore)(MainReducer)
ReactDOM.render(
  <Provider store={store}>
    <CreateTodo />
    <Table />
  </Provider>,
  document.getElementById('root'),
)