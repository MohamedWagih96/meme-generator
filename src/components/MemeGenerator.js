import React from "react";
import html2canvas from "html2canvas";
import Form from "./Form";
import Meme from "./Meme";
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
        this.handleClick = this.handleClick.bind(this);
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

    shuffle() {
        let randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length);
        this.setState({
            randomImg: this.state.allMemeImgs[randomIndex].url
        });
    }

    save() {
        console.log("yo")
    }

    handleClick(event) {
        //To prevent page refreshing
        event.preventDefault();
        const {name} = event.target;

        if(name === "shuffleButton") this.shuffle();
        else if(name === "saveButton") this.save();
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div className = "memeGeneratorBody">
                <Form 
                    topText = {this.state.topText}
                    bottomText = {this.state.bottomText}
                    handleChange = {this.handleChange}
                    handleClick = {this.handleClick}
                />

                <Meme 
                    url = {this.state.randomImg}
                    topText = {this.state.topText}
                    bottomText = {this.state.bottomText}
                /> 
            </div>
        );
    }
}


export default MemeGenerator;