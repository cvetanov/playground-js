import React, { Component } from 'react';
import { Subscribe } from "unstated";

import FilmsContainer from "../state/FilmsContainer";
import Film from "./Film";
import DataFetcher from "../components/DataFetcher";

export default class FilmsList extends Component {

  render() {
    return (
      <Subscribe to={[FilmsContainer]}>
        {
          films => (
            <DataFetcher fetch={films.fetch}>
              {films.state.movies.map(({ title, episode_id }) => <Film title={title} key={episode_id} />)}
            </DataFetcher>
          )
        }
      </Subscribe>
    )
  }
}