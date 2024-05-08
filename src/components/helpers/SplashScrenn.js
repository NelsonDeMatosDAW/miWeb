import React, { useState, useEffect } from 'react';

import './css/joder.css'; // Aquí estarán tus estilos globales
import { Typewriter } from './Typewrite';

import { FaJava, FaHtml5, FaReact, FaNode   } from "react-icons/fa";

const SplashScreen = () => {
    const [animationFinished, setAnimationFinished] = useState(false);

    const handleAnimationEnd = () => {
        // Añadir un retraso de 1 segundo después de que la animación de texto termine
        setTimeout(() => {
            setAnimationFinished(true);
        }, 1500); // 1000 milisegundos = 1 segundo
    };

    return (
        <div className={animationFinished ? "hidden" : "fullscreen"}>
            <Typewriter text="NelsonDeMatosDesigner." speed={80} onFinished={handleAnimationEnd}/>
            <img src='/img/logo_gravity.png' className='logo_animacion'></img>
        </div>
    );
};

export default SplashScreen;