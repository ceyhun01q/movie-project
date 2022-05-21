import React, { Component } from "react";
import "./MovieItem.css";

class MovieItem extends Component {
  render() {
    const { title, year, poster, adFilmList } = this.props;
    const replacementPoster =
      "https://stuki-druki.com/biofoto1/Jackie-Chan.jpg";
    return (
      <article className="movieItem">
        <img
          className="movieItemPoster"
          src={poster !== "N/A" ? poster : replacementPoster}
          alt={title}
        />
        <div className="movieItemInfo">
          <h3 className="movieItemTitle">
            {title}&nbsp;({year})
          </h3>
          <button
            onClick={adFilmList}
            type="button"
            className="movieItemAddButton"
          >
            Добавить в список
          </button>
        </div>
      </article>
    );
  }
}

export default MovieItem;
