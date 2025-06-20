
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import './index.css'
import Investment from './landing_page/investment/Investment';
import Kite from './landing_page/kite/Kite';
import Signpage from './landing_page/signpage/Signpage';










createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/signup' element={<Signpage/>}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='/investment' element={<Investment/>}/>
      <Route path='/kite' element={<Kite/>}/>
      <Route path='*' element={<NotFound/>} />         
    

     
   
    </Routes>
    <Footer/>

  </BrowserRouter>


)
