import "./App.css";
import "./custom.scss";
import About from "./component/About";
import Contact from "./component/Contact";
import Copyright from "./component/Copyright";
import Footer from "./component/Footer";
import Masthead from "./component/Masthead";
import Modals from "./component/Modals";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* <!-- Navbar--> */}
      <Navbar />

      {/* <!-- Masthead--> */}
      <Masthead />

      {/* <!-- Portfolio Section--> */}
      <Portfolio />

      {/* <!-- About Section--> */}
      <About />

      {/* <!-- Contact Section--> */}
      <Contact />

      {/* <!-- Footer--> */}
      <Footer />

      {/* <!-- Copyright Section--> */}
      <Copyright />

      {/* <!-- Portfolio Modals--> */}
      {/* <!-- Portfolio Modal 1--> */}
      <Modals />
    </>
  );
}

export default App;
