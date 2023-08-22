import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar.js"

import HomePage from "./pages/HomePage"
import AboutPage from './pages/AboutPage';
import AssetsPage from './pages/AssetsPage';
import TransactionsPage from './pages/TransactionsPage';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={HomePage}/>
          <Route path="/home" exact Component={HomePage}/>
          <Route path="/assets" exact Component={AssetsPage}/>
          <Route path="/transactions" exact Component={TransactionsPage}/>
          <Route path="/about" exact Component={AboutPage}/>
        </Routes>
        <Footer/>
      </Router>
          
    </div>
  );
}

export default App;