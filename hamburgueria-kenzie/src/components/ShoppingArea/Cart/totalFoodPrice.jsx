import { notifyInfo } from "../../../toastify/toast";
import styles from "../style.module.css";

export const TotalFood = ({ setCurrentSale, currentSale }) => {

  function removeAll() {
    setCurrentSale([])
    notifyInfo("Todos os produtos foram removidos");
  }

  return (
    currentSale.length > 0 && (
      <div className={styles.totalFoodPriceBox}>

        <div className={styles.showPriceBox}>
          <h3 className="totalPrice">Total</h3>
          <p className="totalPriceValue">
            {currentSale.reduce((acc, value) => acc + value.price, 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>
        </div>
        
        <button className="btnRemoveAll" onClick={removeAll}>Remover Todos</button>
      </div>
    )
  );
};
