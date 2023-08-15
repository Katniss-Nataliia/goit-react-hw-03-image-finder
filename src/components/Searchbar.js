import { Component } from "react";
import { fetchImages } from "services/api";


const ERROR_MSG = `Something went wrong, please reload the page`;

export class ImageSearch extends Component {
    state = {
        gallery: [],
        isLoading: false,
        error: null,
        search: ''
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
        this.setState({search: e.target.value})
        
        console.log(this.search)
    }

    render() {
        const { gallery, isLoading, error, search } = this.state;
        return (
            <div>
                <header class="searchbar">
                    <form class="form">
                        <button type="submit" class="button" onSubmit={this.handleSubmit}>
                            <span class="button-label">Search</span>
                        </button>

                        <input
                            class="input"
                            type="text"
                            autocomplete="off"
                            autofocus
                            placeholder="Search images and photos"
                            value={search}
                        />
                    </form>
                </header>
            </div>
        )
    }


}