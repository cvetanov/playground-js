import { Container } from 'unstated';
import { fetch } from "./filmsFetcher";

export default class FilmsContainer extends Container {

  state = {
    movies: {}
  };

  fetch = async () => {
    const { results: movies } = await fetch();
    this.setMovies(movies);
  };

  get = () => {
    return Object.values(this.state.movies);
  };

  getByEpisodeId = (episodeId) => this.state.movies[episodeId];

  setMovies = (movies) => {
    this.setState({
      movies: movies.reduce((acc, curr) => ({ ...acc, [curr.episode_id]: curr }), {})
    });
  };

}
