import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <Header />
            <Home />
            <About />
            <Service />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
