import { Component } from "react";
import { fetchImages } from "services/api";

const ERROR_MSG = `Something went wrong, please reload the page`;

export class ImageSearch extends Component {
    state = {
        gallery: [],
        isLoading: false,
        error: null,
        searchText: ''
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

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            searchText:e.target.value,
        })
        if (this.searchText === ''){
            this.setState({
                gallery:[]
            })
        }else{
            this.setState({
                gallery: fetchImages,
            })
            console.log('user search: ', this.searchText)
        }
         
    }

    render() {
        const {isLoading, searchText } = this.state;
        return (
            <div>
                <header className="searchbar">
                    <form className="form">
                        <button type="submit" className="button" onClick={this.handleSubmit}>
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
                            onChange={this.handleSubmit}
                        />
                    </form>
                </header>
            </div>
        )
    }


}