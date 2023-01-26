import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: false
        }
    }
    render() {
        return (
            <div className="search-container">
                <form>
                    <input type="text" className={`search-input ${this.state.searching ? 'searching' : ''}`} placeholder="Search..." onFocus={() => this.setState({ searching: true })} onBlur={() => this.setState({ searching: false })} />
                </form>
            </div>
        );
    }
}

export default SearchBox;
