import React from "react";
import "./Meme.css"


function Meme(props) {
    const scaleDown = {width: "50%", height: "auto"};
    const normalSize = {width: props.data.width, height: props.data.height};

    return(
        <div id = "memeWrapper">
            <img
                style = {props.data.width > 300 ? scaleDown : normalSize}
                alt = "Dank Meme"
                src = {props.data.img}
                onLoad = {() => props.handleLoad("hidden", "visible")}
            />

            <h2 className = "memeTopText"> {props.topText} </h2>

            <h2 className = "memeBottomText"> {props.bottomText} </h2>
        </div>
    );
}

export default Meme;