import { Link } from "react-router-dom";
import "./servisesCart.css";

function ServisesCart({ data }) {
  return (
    <div className="services">
      <div className="container carts">
        {data.map((item) => {
          return (
            <div key={item.id} className="cart">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desciption}</p>
              <Link to={`/products/${item.id}`}>Подробнее</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServisesCart;
