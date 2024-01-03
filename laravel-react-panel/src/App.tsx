import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { ContextProvider } from './contexts/ContextProdiver'

function App() {


  return (
    <ContextProvider>
     <RouterProvider router={router}/>
    </ContextProvider>
  )
}

export default App
