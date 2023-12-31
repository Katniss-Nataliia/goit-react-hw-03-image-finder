import { Component } from "react";

export class ImageSearch extends Component {
    state = {
        searchText: '',
    }

// function to handle changes in the search input

    handleSearchChange = e => {
        this.setState({
            searchText:e.target.value
        });
    };

//function to handle search from submission
    handleSubmit = async e => {
        e.preventDefault();
        const {searchText} = this.state; //Destructuring searchText from state
        const {onSearchSubmit} = this.props;

        if (searchText.trim() === ''){
            return; //Don't perform search if the input is empty
        }
        // Call the function passed from App component to initiate the search
        onSearchSubmit(searchText, 1); // Passing search text and initial page (missing logic to change the page)

        // Logging the current state of the gallery array
        console.log('react file:Search.js gallery: ', this.state.gallery)
         
    }

    render() {
        const {searchText } = this.state;
        return (
            <div>
                {/* Search bar UI */}
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
                            onChange={this.handleSearchChange}
                        />
                    </form>
                </header>
            </div>
        )
    }


}