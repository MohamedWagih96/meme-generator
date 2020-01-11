import React from "react";
import "./Header.css";

function Header() {
    return(
        <div>
            <header className = "header">
                <div className = "headerContainer">
                    <img 
                        className = "headerImg"
                        src = "https://i.kym-cdn.com/photos/images/original/001/459/556/023.png" 
                        alt = "clown pepe"
                    />

                    <p className = "headerTitle"> Meme Generator </p>
                </div>
            </header>
        </div>
    );
}

export default Header;