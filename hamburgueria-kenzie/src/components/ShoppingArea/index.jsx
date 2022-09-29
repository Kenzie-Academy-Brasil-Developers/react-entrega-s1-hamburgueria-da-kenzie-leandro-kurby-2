import styles from "./style.module.css";
import logo from "../../assets/Mask Group.svg";
import { ProductList } from "./ProductList";
import { useEffect, useState } from "react";
import { RenderProductsInCart } from "./Cart";
import { notifyError } from "../../toastify/toast";
import { ToastContainer } from "react-toastify";

export const MainPage = ({ products, filteredProducts, setFilteredProducts }) => {
  
  const [inputValue, setInputValue] = useState("");
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {inputValue === "" && setFilteredProducts(products)}, [inputValue]);
  useEffect(() => {filteredProducts.length === 0 && inputValue !== "" && 
  notifyError("Nenhum produto foi encontrado")}, [filteredProducts]);

  function showProducts(event) {
    event.preventDefault()
    setFilteredProducts(products.filter(({name, category}) => name.toLowerCase().includes(inputValue.toLowerCase().trim()) ||
    category.toLowerCase().includes(inputValue.toLowerCase().trim())))}

  return (
    <>
      <div className={styles.containerBar}>
        <div className="containerMain">
          <div className={styles.headerPage}>

            <figure className={styles.logo}>
              <img src={logo} alt="logotipo Burguer Kenzie" />
            </figure>

            <form className={styles.searchBox} onSubmit={showProducts}>
                <input onChange={event => setInputValue(event.target.value)} type="text" placeholder="Digitar Pesquisa" />
                <button type="submit" className="btn btnSearch">Pesquisar</button>
            </form>

          </div>
        </div>
      </div>

      <div className="containerMain">
        <ul className={styles.productsList}>
          <ProductList products={filteredProducts.length > 0 ? filteredProducts : products} 
          setCurrentSale={setCurrentSale} currentSale={currentSale} />
        </ul>
          <RenderProductsInCart setCurrentSale={setCurrentSale} currentSale={currentSale}></RenderProductsInCart>
      </div>
          <ToastContainer />
    </>
  );
};
