import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Approutes from "./routes/Approutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Approutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
