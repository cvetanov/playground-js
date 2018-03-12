
import React from 'react';

import { Provider } from "unstated";
import FilmsList from "./FilmsList";

const FilmsPage = () => (
  <Provider>
    <FilmsList />
  </Provider>
);

export default FilmsPage;
