import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import store from './components/store'
import Dashboard from './components/Dashboard'
import { useSelector } from 'react-redux'
function App() {

  return (
    <div>
     <Provider store={store}>
       <Navbar/>
       <Dashboard/>
     </Provider>
   </div>
  )
}

export default App
