import React, { Component } from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

class Search extends Component {
  state = {
    seachTerm: ''
  };
  handleSearchTermEvent = event => {
    this.setState({ seachTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>Search Video</h1>
          <input
            onChange={this.handleSearchTermEvent}
            type="text"
            placeholder="Search"
            value={this.state.seachTerm}
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
              (`${show.title} ${show.description}`.toUpperCase()
                  .indexOf(this.state.seachTerm.toUpperCase()) >= 0)
            )
            .map(show => <ShowCard {...show} key={show.imdbID} />)}
        </div>
      </div>
    );
  }
}

export default Search;
