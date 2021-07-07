import React, { Component } from 'react'
import Products from './Component/Products'
import './assets/style/style.css'
import { Provider } from 'react-redux'
import store from './redux/store'
export class App extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Products />
        </div>
      </Provider>
    )
  }

}

export default App
