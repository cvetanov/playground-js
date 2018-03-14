import { Container } from 'unstated';
import { fetch } from "./filmsFetcher";
import { trackable } from "../decorators/trackable";

export default class FilmsContainer extends Container {

  state = {
    movies: []
  };

  @trackable('FETCH_MOVIES')
  fetch = async () => {
    const { results: movies } = await fetch();
    this.addAll(movies);
  };
  addDummy = () => {
    this.setState({
      movies: [...this.state.movies, { episode_id: -1, title: 'Leroy Jenkins' }]
    });
  };
  addAll = (movies) => {
    this.setState({
      movies: [...this.state.movies, ...movies]
    });
  };

}
