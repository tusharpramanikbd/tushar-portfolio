import './App.css'
import Home from './Pages/Home/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App
