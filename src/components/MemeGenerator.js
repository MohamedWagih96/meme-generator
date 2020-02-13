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
            memes: []
        };

        this.badMemes = [
            "61539", "28251713", "164335977", "112126428", "93895088", "71428573", "123999232",
            "178591752", "21735", "53764", "99683372", "28034788", "14230520", "129242436",
            "101910402", "124822590", "47235368", "161865971", "56225174", "131087935", 
            "21604248", "21735", "101288", "155067746", "134797956", "155518747", "170715647",
            "181913649", "87743020", "438680", "188390779", "6235864", "157978092", "1035805",
            "196652226", 
        ];

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);  
        this.handleLoad = this.handleLoad.bind(this); 
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            const filteredMemes = this.filterMemes(data.data.memes);

            this.setState({
                memes: filteredMemes
            });
        })
        .catch(error => {
            console.log("Error while retrieving data from the server")
        })
    }

    filterMemes(memes) {
        return memes.filter(meme => !(this.badMemes.includes(meme.id)))
                    .map(meme => meme);
    }

    shuffle() {
        this.toggleVisibility("visible", "hidden");

        let randomIndex = Math.floor(Math.random() * this.state.memes.length);
        let randomMeme = this.state.memes[randomIndex];

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