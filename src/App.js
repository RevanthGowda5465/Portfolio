import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './folder/About';
import Contact from './folder/Contact';
import MainContent from './folder/MainContent';
import Nav from './folder/Nav';
import Projects from './folder/Projects';

function App() {
  return (

    <div className="main">
      
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<MainContent/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;