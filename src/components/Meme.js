import React from "react";
import "./Meme.css"

function Meme(props) {
    const stylez = {width: "80%", height: "auto"};
    const me = {width: "1000px", height: "1000px"};
    return(
        <div id = "memeWrapper">
            <img 
                style = {props.topText === "XYZ" ? stylez : me}
                alt = "Dank Meme"
                src = {props.url}
            />

            <h2 className = "memeTopText"> {props.topText} </h2>

            <h2 className = "memeBottomText"> {props.bottomText} </h2>
        </div>
    );
}

export default Meme;