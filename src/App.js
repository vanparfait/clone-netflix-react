// import { Redirect, Router, Route } from "react-router-dom";
import "./App.scss";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Row from "./components/row/Row";
import Video from "./components/video/Video";
import requests from "./config/Request.js";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
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
    ),
  },
  {
    path: "video/:id",
    element: <Video />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Route path="/">
//           <Nav />
//           <Banner />
//           <Row
//             title="Programmes originaux Netflix"
//             fetchUrl={requests.fetchNetflixOriginals}
//             isPoster={true}
//           />
//           <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
//           <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
//           <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
//           <Row title="Films d'horreur" fetchUrl={requests.fetchTrending} />
//           <Row title="Comédies" fetchUrl={requests.fetchTopRated} />
//           <Row title="Documentaires" fetchUrl={requests.fetchActionMovies} />

//           <Footer />
//         </Route>
//         <Route path="video/:id" component={Video} />
//         <Route path="*">
//           <Redirect to="/" />
//         </Route>
//       </Router>
//     </div>
//   );
// }

// export default App;
