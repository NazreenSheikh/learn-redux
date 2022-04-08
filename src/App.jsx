import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import './App.css'
import Cart from './page/Cart'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
