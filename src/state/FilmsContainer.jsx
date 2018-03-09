import { Container } from 'unstated';
import { fetch } from "./filmsFetcher";

export default class FilmsContainer extends Container {

  state = {
    movies: []
  };

  fetch = async () => {
    const { results: movies } = await fetch();
    this.addAll(movies);
  };
  addAll = (movies) => {
    this.setState({
      movies: [...this.state.movies, ...movies]
    });
  };

}
