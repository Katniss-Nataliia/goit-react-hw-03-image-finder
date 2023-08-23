import { Component } from "react";
import { fetchImages } from "services/api";

const ERROR_MSG = `Something went wrong, please reload the page`;

export class ImageSearch extends Component {
    state = {
        gallery: [],
        isLoading: false,
        error: null,
        searchText: '',
    }
    async componentDidMount() {
        try {
            this.setState({ isLoading: true, error: null });
            const fetchedImages = await fetchImages();
            this.setState({ gallery: fetchedImages })
        } catch (error) {
            this.setState({ error: ERROR_MSG })
        } finally {
            this.setState({ isLoading: false })
        }
    }

    handleSearchChange = e => {
        this.setState({
            searchText:e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const {searchText} = this.state; //Destructuring searchText from state
        
        if (searchText === ''){
            this.setState({
                gallery:[],
                isLoading: false,
            });
            return;
        }

        this.setState({isLoading:true, error: null});

        try{
            // Fetching images based on search text and updating the gallery state
            const fetchedImages = await fetchImages(searchText);
            const hits = fetchedImages.hits;
            this.setState({
                gallery: hits,
                isLoading: false,
            })
        } catch(error){
            this.setState({
                error:ERROR_MSG,
                isLoading:false,
            })
        }
        // Logging the current state of the gallery array
        console.log('react file:Search.js gallery: ', this.state.gallery)
         
    }

    render() {
        const {isLoading, searchText } = this.state;
        return (
            <div>
                <header className="searchbar">
                    <form className="form">
                        <button type="submit" 
                        className="button" 
                        onClick={this.handleSubmit}>
                            <span className="button-label">Search</span>
                        </button>

                        <input
                            className="input"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={searchText}
                            // onChange={e=>this.setState({searchsearchText: e.target.value})}
                            onChange={this.handleSearchChange}
                        />
                    </form>
                </header>
            </div>
        )
    }


}