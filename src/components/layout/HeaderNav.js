import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import "./css/header.css"

export const HeaderNav = (props) => {

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

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
      <div className='divDescarga'>
        {isReadyForInstall && (
          <button onClick={downloadApp}><img src={`${process.env.PUBLIC_URL}/img/descargar.png`} alt='descargar' id='imgDescargar'/> APP</button>
        )}
        {/* <img src={`${process.env.PUBLIC_URL}/img/descargar.png`} alt='descargar' id='imgDescargar'/> */}
      </div>
      
      <div className='divNav'>
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
            <li>
              <NavLink to="/curriculum" activeclass="active" onClick={toggleMenu}>Curriculum</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    
  )
}
