import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import AddPage from './Pages/AddPage';
import Wishlist from './Pages/Wishlist';
import Basket from './Pages/Basket';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route  element={<MainLayout></MainLayout>}>
      <Route path="/" element={<Home></Home>} /> 
      <Route path="/basket" element={<Basket></Basket>}/>
      <Route path='/add' element={<AddPage></AddPage>}/>
      <Route path='/wishlist' element={<Wishlist></Wishlist>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
