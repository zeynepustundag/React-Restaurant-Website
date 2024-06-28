import Header from "./components/Header"
import Footer from "./components/Footer"

import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from "./pages/Contact"

import "./App.css"

function App() {


  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </>
  )
}

export default App
