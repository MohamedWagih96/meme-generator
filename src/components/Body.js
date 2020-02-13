import React from "react";

import Form from "./Form";
import Meme from "./Meme";
import "./Body.css";

function Body(props) {
    return(
        <div className = "mgBody">
            <Form
                topText = {props.topText}
                bottomText = {props.bottomText}
                handleChange = {props.handleChange}
                handleClick = {props.handleClick}
            />
            
            <Meme 
                data = {props.data}
                topText = {props.topText}
                bottomText = {props.bottomText}
                handleLoad = {props.handleLoad}
            />  

            <div id = "spinner"></div>       
        </div>
    );
}

export default Body;