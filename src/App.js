import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'hover.css/css/hover.css';
import Shop from './components/shop/Shop';
import ProductInfo from './components/shop/ProductInfo';

function App() {
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false); // After 3 seconds, set loading to false
    }, 8000);
  }, []);

  return (
    <Router basename="willowhome">
      {/* {loading ? ( 
        <Loading />
      ) : (
        <> </>
      )} */}
          <Header setIsCartOpen={setIsCartOpen}/>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />} />

          </Routes>
          <Footer />
       
    </Router>
  );
}

export default App;
