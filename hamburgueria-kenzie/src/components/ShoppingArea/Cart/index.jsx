import { notifyInfo } from "../../../toastify/toast";
import styles from "../style.module.css";
import { TotalFood } from "./totalFoodPrice";

export const RenderProductsInCart = ({ setCurrentSale, currentSale }) => {

  function removeProduct(event) {
   setCurrentSale(currentSale.filter(el => el.id != event.target.id));
   notifyInfo("Produto removido do carrinho");
  }
  
  return (
    <div className={styles.cartContainer}>
      <div className={styles.headerCartContainer}>
        <h2 className="textHeaderContainer">Carrinho de Compras</h2>
      </div>

      <ul className="cartContainerList">   
        {currentSale.length > 0 ? (
        
          currentSale.map(({ category, id, img, name }, index) => (
            <li key={index} className="cartProducts">
              <div className="nameAndImg">

                <figure className="alignFigure">
                  <img src={img} alt={name}/>
                </figure>

                <div className="paddingText">
                  <h5 className="nameProduct">{name}</h5>
                  <p className="categoryProduct">{category}</p>
                </div>

              </div>
              <button id={id} className="btnRemoveFromCart" onClick={removeProduct}>Remover</button>
            </li>
          ))
          ) : ( 
          <div className={styles.noContentContainer}>
            <h3 className="noContentText1">Sua sacola está vazia</h3>
            <p className="noContentText2">Adicionar Itens</p>
          </div>
        )}
      </ul>
      <TotalFood setCurrentSale={setCurrentSale} currentSale={currentSale}/>
    </div>
  );
};
