import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services'
import Contact from './components/Contact'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/navbar' element={<NavBar />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
