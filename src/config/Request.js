//cle : 27e01e4a6ce05029d214d370746cfd80
//https://api.themoviedb.org/3

const API_KEY = "27e01e4a6ce05029d214d370746cfd80";
const baseURL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${baseURL}/trendy/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${baseURL}/trendy/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${baseURL}/trendy/all/week?api_key=${API_KEY}&langage=en-US`,
  fetchActionMovies: `${baseURL}/trendy/all/week?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `${baseURL}/trendy/all/week?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `${baseURL}/trendy/all/week?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `${baseURL}/trendy/all/week?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `${baseURL}/trendy/all/week?api_key=${API_KEY}&width_genres=99`,
};

export default requests;
