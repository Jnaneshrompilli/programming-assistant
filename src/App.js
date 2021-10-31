import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Route path="/programming-assistant/home" component={Home} />
          <Route path="/programming-assistant/about" component={About} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
