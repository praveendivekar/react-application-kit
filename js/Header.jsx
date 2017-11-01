// @flow

import React from "react";
import { Link } from "react-router-dom";

const Header = (props: {
  showSearch?: boolean,
  handleSearchTermEvent?: Function,
  seachTerm?: string
}) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        onChange={props.handleSearchTermEvent}
        type="text"
        placeholder="Search"
        value={props.seachTerm}
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">Search Video</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermEvent: function noop() {},
  seachTerm: ""
};

export default Header;
