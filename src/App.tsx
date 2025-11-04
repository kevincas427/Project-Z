import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Approutes from './routes/approutes'
import Header from './components/Header'
import Footer from './components/Footer'

function App(){
  return( 
    <Router>
      <div className="app-container">
        <Header/>
        <main className="content">
          <Approutes/>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App