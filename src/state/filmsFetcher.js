import { get } from "../api";

const API = 'https://swapi.co/api/films/';

export const fetch = () => get(API);
