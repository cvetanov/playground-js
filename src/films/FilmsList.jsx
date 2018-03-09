import React, { Component } from 'react';
import { Subscribe } from "unstated";

import FilmsContainer from "../state/FilmsContainer";
import Film from "./Film";

export default class FilmsList extends Component {

  render() {
    return (
      <Subscribe to={[FilmsContainer]}>
        {
          films => [
            // todo: fetch the data on mount instead of doing it on button click
            <button onClick={films.fetch} key="fetch">Fetch</button>,
            ...films.state.movies.map(({ title, episode_id }) => <Film title={title} key={episode_id}/>)
          ]
        }
      </Subscribe>
    )
  }
}