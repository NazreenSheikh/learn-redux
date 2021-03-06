import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Cart from './page/Cart'
import Navbar from './components/Navbar'
import store from './store/store'
import {Provider} from 'react-redux'

function App() {


  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
        </Provider>
    </div>
  )
}

export default App
