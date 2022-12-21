import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services'
import Contact from './components/Contact'
import NavBar from './components/NavBar';
import Work from './components/Work'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/navbar' element={<NavBar />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
 