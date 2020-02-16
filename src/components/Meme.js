import React from "react";
import "./Meme.css"

function Meme(props) {
    let viewPortWidth = window.innerWidth;
    let memeWidth = props.data.width;
    let scaleDown = {};
    let normalSize = {};

    if(viewPortWidth < 500) {
        scaleDown = {width: "90%", height: "auto"};

        if(memeWidth > 300)
            normalSize = {width: "300px", height: "auto"};
        else
            normalSize = {width: props.data.width, height: props.data.height};
    }
    else {
        if(memeWidth > 750) {
            scaleDown = {width: "35%", height: "auto"};
        }
        else
            scaleDown = {width: "70%", height: "auto"};

        normalSize = {width: props.data.width, height: props.data.height};
    }
    
    

    return(
        <div id = "memeWrapper">
            <img
                style = {props.data.width > 500 ? scaleDown : normalSize}
                alt = "Dank Meme"
                src = {props.data.img}
                onLoad = {() => props.handleLoad("hidden", "visible")}
            />

            <h2 className = "memeTopText">{props.topText}</h2>

            <h2 className = "memeBottomText">{props.bottomText}</h2>
        </div>
    );
}

export default Meme;