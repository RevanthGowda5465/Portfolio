import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './folder/About';
import Contact from './folder/Contact';
import MainContent from './folder/MainContent';
import Nav from './folder/Nav';
import Projects from './folder/Projects';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div className="main">
      <Helmet>
        <title>RevanthGowdaR</title>
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta property="og:image" content="/path/to/opengraph-image.png" />
      </Helmet>
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