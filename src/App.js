import "./App.scss";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Row from "./components/row/Row";
import requests from "./config/Request.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Programmes originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isPoster={true}
      />
      <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Films d'horreur" fetchUrl={requests.fetchTrending} />
      <Row title="Comédies" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaires" fetchUrl={requests.fetchActionMovies} />

      <Footer />
    </div>
  );
}

export default App;
