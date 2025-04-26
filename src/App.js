import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename='willowhome'>
      <Header/>
     <Routes>
      <Route index element={<Home/>}/>

     </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
