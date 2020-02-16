import React from "react";
import "./Form.css";

function Form(props) {
    return(
        <form className = "userInputForm">
            <input 
                className = "topTextField"
                type = "text"
                name = "topText"
                value = {props.topText}
                maxLength = {"60"}
                placeholder = "Top text.."
                onChange = {props.handleChange}
            />

            <input 
                className = "bottomTextField"
                type = "text"
                name = "bottomText"
                value = {props.bottomText}
                maxLength = {"60"}
                placeholder = "Bottom text.."
                onChange = {props.handleChange}
            />

            <div className = "userInputForm-Buttons">
                <button className = "shuffleButton" name = "shuffleButton" onClick = {props.handleClick}>Shuffle</button>
                <button className = "saveButton" name = "saveButton" onClick = {props.handleClick}>Save</button>
            </div>
        </form>
    );
}

export default Form;