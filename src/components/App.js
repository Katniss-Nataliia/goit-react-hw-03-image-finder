import { Component } from "react";
import { ImageSearch } from "./Searchbar";
import { ImageCard } from "./ImageGallery";

// const ERROR_MSG = `Something went wrong, please reload the page`;

export class App extends Component{
    state = {
        gallery:[],
        isLoading: false,
        error: null,
    }
    render(){
        return(
            <div>
                <ImageSearch/>
                <ImageCard/>
            </div>
        )
    }
}