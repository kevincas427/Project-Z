import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Approutes from "./routes/Approutes";
import {NavBarDemo} from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Footer } from './components/UI/footer-section';


function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="Conten-header">
          <NavBarDemo />
        </div>
        <main className="content ">
          <Approutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
