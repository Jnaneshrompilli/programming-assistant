import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer'
import {SidebarLeft, SidebarRight} from './components/SideBar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <SidebarLeft />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <SidebarRight />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
