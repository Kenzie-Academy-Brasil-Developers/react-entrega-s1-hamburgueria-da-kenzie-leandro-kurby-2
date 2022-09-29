import { notifySuccess, notifyWarning } from "../../../toastify/toast";

export const ProductList = ({ products, setCurrentSale, currentSale }) => {

  function handleClick(event) {
    !currentSale.some((el) => el.id == event.target.id) ? 
    (setCurrentSale([...currentSale, products.find((el) => el.id == event.target.id)]),
     notifySuccess("Produto adicionado"))
    : notifyWarning("Você só pode adicionar um do mesmo produto ao carrinho");
  }

  return (
    <>
      {products.map(({ id, name, category, price, img }, index) => (
        <li key={index} className="foodProducts">
          <div>
            
            <div className="figureContainer alignFigure">
              <figure>
                <img src={img} alt={name} />
              </figure>
            </div>

            <div>
              <h3 className="productsName">{name}</h3>
              <p className="productsCategory">{category}</p>
              <p className="productsPrice">
                {Number(price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </p>
              <button className="btn addToCart" id={id} onClick={handleClick}>Adicionar</button>
            </div>

          </div>
        </li>
      ))}
    </>
  );
};
