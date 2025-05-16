import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import Navbar from './Components/Navbar'
import store from './Components/store'
import Dashboard from './Components/Dashboard'
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
