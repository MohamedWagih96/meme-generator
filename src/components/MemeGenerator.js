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
                img: "https://i.imgur.com/XTNyiVw.png"
            },
            memez: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        let randomIndex = Math.floor(Math.random() * this.state.memez.length);
        let randomMeme = this.state.memez[randomIndex];
        this.setState({
            meme: {
                name: randomMeme.name,
                img: randomMeme.url
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
                    url = {this.state.meme.img}
                    topText = {this.state.topText}
                    bottomText = {this.state.bottomText}
                />         
            </div>
        );
    }
}


export default MemeGenerator;