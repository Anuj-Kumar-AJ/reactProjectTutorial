import React from "react"
import assets from '../assets/aj-pic.png'

const Header = ()=> {
    
    return(
        <nav className='nav'>  
        
          <img src={assets} className='nav-logo'/>
          <ul className='nav-list'>
            <li>Pricing</li>
            <li>About</li>
            <li>Constract</li>
          </ul>
        
      </nav>
    )
}

export default Header