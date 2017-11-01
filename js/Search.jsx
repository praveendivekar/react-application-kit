// @flow
import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

class Search extends Component {
  state = {
    seachTerm: ""
  };
  props: {
    shows: Array<Show>
  };
  handleSearchTermEvent = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ seachTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <Header
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearchTermEvent={this.handleSearchTermEvent}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.seachTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard {...show} key={show.imdbID} />)}
        </div>
      </div>
    );
  }
}

export default Search;
