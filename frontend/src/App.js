import React from 'react'
import {BrowserRouter as Router,Routes,Route,useRoutes,} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductGrid from './Components/ProductGrid';
//import ProductPage from './Components/ProductsPage';
import Contact from './Components/Contact'
import { CartProvider } from './context/CartContext';
import CartPage from './Components/CartPage';
import AboutUs from './Components/About us/AboutUs';
import SafetyTips from './Components/SafetyTips/SafetyTips';
//import { Navigate, Route, Router, Routes } from 'react-router-dom';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <ProductGrid /> },
    { path: "/products", element: <ProductGrid /> },
    { path: "/cart-items", element:<CartPage/>},
    { path: '/contact', element:<Contact/>},
    { path:'/about-us', element:<AboutUs/>},
    { path:'/safety-tips', element:<SafetyTips/>}
    // ...
  ]);
  return routes;
};
const AppWrapper=()=>{
  return(
    <CartProvider>
      <Router>
        <Header/>
        <App/>
        <Footer/>
      </Router>
    </CartProvider>
  )
}
export default AppWrapper


