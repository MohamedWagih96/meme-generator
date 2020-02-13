import React from "react";
import "./Header.css";

function Header() {
    return(
        <header className = "mgHeader">
            <img 
                className = "headerImg"
                src = "https://i.kym-cdn.com/photos/images/original/001/459/556/023.png" 
                alt = "clown pepe"
            />

            <p className = "headerTitle">Meme Generator</p>
        </header>
    );
}

export default Header;