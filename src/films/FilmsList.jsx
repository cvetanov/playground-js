import React, { Component, Fragment } from 'react';
import { Subscribe } from "unstated";

import FilmsContainer from "../state/FilmsContainer";
import Film from "./Film";
import DataFetcher from "../components/DataFetcher";
import { Link } from "react-router-dom";

export default class FilmsList extends Component {

  render() {
    const { match: { url }} = this.props;
    return (
      <Subscribe to={[FilmsContainer]}>
        {
          films => (
            <DataFetcher fetch={films.fetch}>
              {films.get().map(({ title, episode_id }) => (
                <Fragment key={episode_id}>
                  <Film title={title} />
                  <Link to={`${url}/${episode_id}`}>Edit</Link>
                </Fragment>
              ))}
            </DataFetcher>
          )
        }
      </Subscribe>
    )
  }
}