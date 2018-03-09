
export const get = URL => fetch(URL).then(r => r.json());