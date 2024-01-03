import { useState } from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import { Provider } from 'react-redux'
import {store} from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <Navbar/>
      <Page/>
    </Provider>
  )
}

export default App
