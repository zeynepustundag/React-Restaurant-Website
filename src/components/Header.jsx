import React from 'react'
import pizzalogo2 from "../assets/pizzalogo2.webp"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='headerdiv'>
            <Link to="/"><img className='logo' src={pizzalogo2}></img></Link> 
            <div className='links'>
                <Link to="/"><button className='linkbutton'>Home</button></Link>
                <Link to="/menu"><button className='linkbutton'>Menu</button></Link>
                <Link to="/about"><button className='linkbutton'>About</button></Link>
                <Link to="/contact"><button className='linkbutton'>Contact</button></Link>
            </div>
        </div>
    )
}

export default Header