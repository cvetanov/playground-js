import React, { Component } from 'react';

import { Subscribe } from "unstated";
import FilmsContainer from "../state/FilmsContainer";
import Film from "./Film";

export default class FilmEditPage extends Component {

  // TODO gcvetano 2018-04-10: make the title editable

  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <Subscribe to={[FilmsContainer]}>
        {
          films => {
            const film = films.getByEpisodeId(id);
            return <Film title={film.title} key={film.episode_id} />
          }
        }
      </Subscribe>
    )
  }
}