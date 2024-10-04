import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export const DarkMode = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.style.backgroundColor = '#1a202c'; // Dark background color
            document.body.style.color = '#e2e8f0'; // Light text color
        } else {
            document.documentElement.classList.remove('dark');
            document.body.style.backgroundColor = '#ffffff'; // Light background color
            document.body.style.color = '#1a202c'; // Dark text color
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <button 
            onClick={toggleTheme}
            className={`fixed top-4 right-80 flex items-center justify-center p-2 rounded-full transition-colors duration-200 ${
                theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-gray-200'
            }`}
        >
            {theme === 'light' ? (
                <>
                    <FaMoon className="text-xl mr-2" />
                    <span>Modo Oscuro</span>
                </>
            ) : (
                <>
                    <FaSun className="text-xl mr-2" />
                    <span>Modo Claro</span>
                </>
            )}
        </button>
    )
}
