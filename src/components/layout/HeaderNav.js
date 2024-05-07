import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    //console.log(menuOpen);
    
  }


  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className='logo'>
        <h3>NelsonDeMatos<b>Designer</b></h3>
      </div>
        
        <nav>
            <button className='menu-button' onClick={toggleMenu}>
              ☰
            </button>
            <ul className={menuOpen ? 'open' : 'close'}>
                <li>
                  <NavLink to="/inicio" activeclass="active" onClick={toggleMenu}>Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="/portafolio" activeclass="active" onClick={toggleMenu}>Portafolio</NavLink>
                </li>
                {/*
                <li>
                  <NavLink to="/servicios" activeclass="active" onClick={toggleMenu}>Servicios</NavLink>
                </li>
                */}
                <li>
                  <NavLink to="/curriculum" activeclass="active" onClick={toggleMenu}>Curriculum</NavLink>
                </li>
                {/*
                <li>
                  <NavLink to="/contacto" activeclass="active" onClick={toggleMenu}>Contacto</NavLink>
                </li>
                */}

            </ul>
        </nav>

    </header>
    
    
  )
}
