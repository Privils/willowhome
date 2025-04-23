import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
   <Router>
     <Header/>
    <Routes>
    <Route index element={<Home/>}/>
     {/*  <Route path='/home' element={<Home/>}/>
     <Route path="/footer" element={<Footer/>}/> */}
    </Routes>
   </Router>
  );
}

export default App;
