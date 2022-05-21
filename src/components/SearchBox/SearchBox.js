import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    const { searchLineChangeHandler, searchFilm, nameFilm } = this.props;
    return (
      <div className="searchBox">
        <form className="searchBoxForm" onSubmit={(e) => e.preventDefault()}>
          <label className="searchBoxFormLabel">
            Искать фильм по названию:
            <input
              value={nameFilm}
              type="text"
              className="searchBoxFormInput"
              placeholder="Axtaris"
              onChange={searchLineChangeHandler}
            />
          </label>
          <button
            className="searchBoxFormLabelSubmit"
            type="submit"
            disabled={!nameFilm}
            onClick={searchFilm}
          >
            Искать
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
