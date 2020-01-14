import React from "react";
import "./Meme.css"

function Meme(props) {
    return(
        <div className = "memeImage">
            <img
                style = {{width: "50%", height: "auto"}}
                alt = "Dank Meme"
                src = {props.url}
            />

            <h2 className = "memeTopText"> {props.topText} </h2>

            <h2 className = "memeBottomText"> {props.bottomText} </h2>

        </div>
    );
}

export default Meme;