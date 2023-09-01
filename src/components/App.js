import React, { Component } from "react";
import { ImageSearch } from "./Searchbar";
import { ImageCard } from "./ImageGallery";
import { fetchImages } from "../services/api";
import { ImageModal } from "./Modal";

const ERROR_MSG = `Something went wrong, please reload the page`;

export class App extends Component{
    // Initialize the state with empty gallery, loading flag, and error
    state = {
        gallery:[],
        isLoading: false,
        error: null,
        selectedImg: null,
    }
    //Function to handle search submission
    handleSearchSubmit = async (searchText, page) => {
        try{
            //Set loading state and clear previous error
            this.setState({isLoading:true, error:null})

            // Fetch images based on search text and page number
            const fetchedImages = await fetchImages(searchText, page)

            //Update the gallery state with fetched images
            this.setState({
                gallery: fetchedImages.hits,
            })

        }catch(error){
            this.setState({error: error.message || 'Something went wrong'});
        }finally{
            this.setState({isLoading: false});
        }
    };

    setSelectedImg = () => {
        this.setState({selectedImg: this.largeImageURL})
    }

    closeModal = () => {
        this.setState({selectedImg: null})
    }


    render(){
        const {gallery, isLoading, error, selectedImg} = this.state;
        return(
            <div>
                {/* render the Searchbar component */}
                <ImageSearch onSearchSubmit={this.handleSearchSubmit} />
                {/* Render loading message, error message, or ImageCard */}
                {
                isLoading?(
                    <p>Loading...</p>
                ) : error ? (
                    <p>{ERROR_MSG}</p>
                ) : (
                    gallery.length > 0 && <ImageCard gallery={gallery}/>
                )
            }
            <ImageModal
                isOpen={selectedImg !== null}
                onClose={this.closeModal}
                image={selectedImg}
            />
            </div>
        )
    }
   
}