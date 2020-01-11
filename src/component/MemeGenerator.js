import React from "react";
import "./MemeGenerator.css";

class MemeGenerator extends React.Component {
    constructor() {
        super();

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgur.com/XTNyiVw.png",
            allMemeImgs: []
        };

        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            this.setState({
                allMemeImgs: data.data.memes
            })
        })
        .catch(error => {
            console.log("Error while retrieving data from the server")
        })
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div>
                <div className = "userInputForm">
                    <form onClick = {this.handleClick}>
                        <input 
                            className = "topTextField"
                            type = "text"
                            name = "topText"
                            value = {this.state.topText}
                            placeholder = "Top text"
                            onChange = {this.handleChange}
                        />

                        <input 
                            className = "bottomTextField"
                            type = "text"
                            name = "bottomText"
                            value = {this.state.bottomText}
                            placeholder = "Bottom text"
                            onChange = {this.handleChange}
                        />

                        <button> Generate </button>
                    </form>
                </div>
            </div>
        );
    }
}


export default MemeGenerator;