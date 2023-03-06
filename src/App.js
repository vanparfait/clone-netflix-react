import "./App.scss";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div className="test"></div>
      <Footer />
    </div>
  );
}

export default App;
