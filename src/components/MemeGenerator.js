import React from "react";
import domtoimage from 'dom-to-image';

import Form from "./Form";
import Meme from "./Meme";
import "./MemeGenerator.css";


class MemeGenerator extends React.Component {
    constructor() {
        super();

        this.state = {
            topText: "",
            bottomText: "",
            meme: {
                name: "Joker and Mini Joker",
                img: "https://i.imgur.com/XTNyiVw.png",
                width: 1200,
                height: 600
            },
            memez: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);  
        this.handleLoad = this.handleLoad.bind(this); 
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            this.setState({
                memez: data.data.memes
            })
        })
        .catch(error => {
            console.log("Error while retrieving data from the server")
        })
    }

    shuffle() {
        this.toggleVisibility("visible", "hidden");

        let randomIndex = Math.floor(Math.random() * this.state.memez.length);
        let randomMeme = this.state.memez[randomIndex];
        this.setState({
            meme: {
                name: randomMeme.name,
                img: randomMeme.url,
                width: randomMeme.width,
                height: randomMeme.height
            }
        });
    }

    save() {
        domtoimage.toJpeg(document.getElementById("memeWrapper"), {quality: 1.0})
        .then(dataUrl => {
            //Create a hyperlink
            let link = document.createElement("a");
            //File name
            link.download = this.state.meme.name;
            //Destination
            link.href = dataUrl;
            link.click();
        });
    }

    toggleVisibility(spinnerVisibility, memeVisibility) {
        document.getElementById("spinner").style.visibility = spinnerVisibility;
        document.getElementById("memeWrapper").style.visibility = memeVisibility;
    }

    handleClick(event) {
        //To prevent page from automatic refreshing
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

    handleLoad(spinnerVisibility, memeVisibility) {
        this.toggleVisibility(spinnerVisibility, memeVisibility);
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
                    data = {this.state.meme}
                    topText = {this.state.topText}
                    bottomText = {this.state.bottomText}
                    handleLoad = {this.handleLoad}
                />  

                <div id = "spinner"></div>       
            </div>
        );
    }
}


export default MemeGenerator;