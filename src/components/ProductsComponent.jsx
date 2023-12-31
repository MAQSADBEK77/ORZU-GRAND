import "./productComponent.css";
import TitleComponent from "../components/TitleComponent";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

function ProductsComponent({ title, data }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="products">
      <div className="container">
        <TitleComponent title={title} />
        <div className="carts">
          {data.map((item) => {
            return (
              <div data-aos="flip-up" className="cart" key={item.id}>
                <div className="imgParent">
                  <img src={item.img} alt={item.title} />
                </div>
                <h2>{item.title}</h2>
                <Link to={`products/${item.id}`}>Посмотреть все</Link>
              </div>
            );
          })}
          <Link data-aos="zoom-in" className="allProductsLink" to="/products">
            Перейти в каталог нашей продукции{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none">
              <g clip-path="url(#clip0_502_67)">
                <path
                  d="M30 15C30 6.7285 23.2715 -2.94112e-07 15 -6.55671e-07C6.7285 -1.01723e-06 -2.94112e-07 6.72849 -6.55671e-07 15C-1.01723e-06 23.2715 6.72967 30 15 30C23.2703 30 30 23.2715 30 15ZM2.32377 15C2.32377 8.01123 8.01006 2.32377 15 2.32377C21.9899 2.32377 27.6762 8.01123 27.6762 15C27.6762 21.9899 21.9899 27.6762 15 27.6762C8.01006 27.6762 2.32377 21.9888 2.32377 15Z"
                  fill="#0D4C93"
                />
                <path
                  d="M13.3966 21.6344L19.2061 15.825C19.6569 15.3718 19.6569 14.6399 19.2061 14.1867L13.3966 8.37725C12.9621 8.0043 12.3196 8.0043 11.885 8.37725C11.3982 8.79438 11.3413 9.52867 11.7584 10.0155L16.7429 15L11.7583 19.9962C11.3075 20.4493 11.3075 21.1813 11.7583 21.6344C12.2115 22.0853 12.9435 22.0853 13.3966 21.6344Z"
                  fill="#0D4C93"
                />
              </g>
              <defs>
                <clipPath id="clip0_502_67">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(30) rotate(90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
      <TitleComponent title="УСЛУГИ" />
    </div>
  );
}

export default ProductsComponent;
