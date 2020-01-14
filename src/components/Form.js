import React from "react";
import "./Form.css";

function Form(props) {
    return(
        <div className = "userInputForm">
            <form>
                <input 
                    className = "topTextField"
                    type = "text"
                    name = "topText"
                    value = {props.topText}
                    maxLength = {"50"}
                    placeholder = "Top text.."
                    onChange = {props.handleChange}
                />

                <input 
                    className = "bottomTextField"
                    type = "text"
                    name = "bottomText"
                    value = {props.bottomText}
                    maxLength = {"50"}
                    placeholder = "Bottom text.."
                    onChange = {props.handleChange}
                />

                <button className = "shuffleButton" name = "shuffleButton" onClick = {props.handleClick}> Shuffle </button>

                <button className = "saveButton" name = "saveButton" onClick = {props.handleClick}> Save </button>
            </form>
        </div>
    );
}

export default Form;