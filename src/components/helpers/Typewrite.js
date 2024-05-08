import { useState, useEffect } from "react";

export const Typewriter = ({ text, speed = 100, onFinished }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timerId = setTimeout(() => {
                setDisplayedText(displayedText + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timerId);
        } else {
            onFinished(); // Llamar a onFinished cuando la animación termine
        }
    }, [index, displayedText, text, speed, onFinished]);

    return (
        <div className="typewriter">
            <h1>{displayedText}</h1>
        </div>
    );
};