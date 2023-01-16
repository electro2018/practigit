import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
        <Navbar />

    <Routes>
  
    <Route path="/" element={ <ItemListContainer /> } /> 
    <Route path="/category/:categoryName" element={<ItemListContainer />} /> 
    <Route path="/category" element={<ItemListContainer />} /> 
    <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
    <Route path="/cart" element={<h3>el carrito</h3>} />
    <Route path="*" element={ <h2>Lo siento esta url no existe</h2> } />
      </Routes>
   </BrowserRouter>
  );
 }

export default App;
/*   //<Route path="/category/:categoryName" element={<ItemListContainer />} />
      <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
      <Route path="/cart" element={ <h3>Aca se muestra el carrito</h3> } />
      <Route path="*" element={ <h2>Lo siento esta url no existe</h2> } /><div>
      <Navbar />
       <Route path="/category/categoryName" element={<ItemListContainer />} /> 
      <ItemListContainer />
      <ItemDetailContainer />
    </div>*/