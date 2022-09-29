import { useEffect, useState } from "react"
import { MainPage } from "./components/ShoppingArea"
import { api } from "./services/api";

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
    .then(res => (setProducts(res.data)))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <MainPage products={products} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
    </div>
  )
}

export default App
