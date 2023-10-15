import "./menuDraver.css";
import { NavLink } from "react-router-dom";
function MenuDrawer({ menuBurger, setMenuBurger }) {
  return (
    <>
      <div
        onClick={() => setMenuBurger(false)}
        className={menuBurger && "backdrop"}></div>
      <div className={menuBurger ? "drawer-par" : "drawer-par burger-none"}>
        <div
          onClick={() => setMenuBurger(false)}
          className="menu-burger burger-pos">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none">
            <path
              d="M1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H17.5C18.3284 3 19 2.32843 19 1.5C19 0.671573 18.3284 0 17.5 0H1.5Z"
              fill="#0D4C93"
            />
            <path
              d="M1.5 5C0.671573 5 0 5.67157 0 6.5C0 7.32843 0.671573 8 1.5 8H11.5C12.3284 8 13 7.32843 13 6.5C13 5.67157 12.3284 5 11.5 5H1.5Z"
              fill="#0D4C93"
            />
            <path
              d="M0 11.5C0 10.6716 0.671573 10 1.5 10H17.5C18.3284 10 19 10.6716 19 11.5C19 12.3284 18.3284 13 17.5 13H1.5C0.671573 13 0 12.3284 0 11.5Z"
              fill="#0D4C93"
            />
            <path
              d="M1.5 15C0.671573 15 0 15.6716 0 16.5C0 17.3284 0.671573 18 1.5 18H11.5C12.3284 18 13 17.3284 13 16.5C13 15.6716 12.3284 15 11.5 15H1.5Z"
              fill="#0D4C93"
            />
          </svg>
        </div>
        <div className="drawer">
          <NavLink onClick={() => setMenuBurger(false)} to="/">
            <div></div>МАГАЗИН
          </NavLink>
          <NavLink onClick={() => setMenuBurger(false)} to="/info">
            <div></div>О КОМПАНИИ
          </NavLink>
          <NavLink onClick={() => setMenuBurger(false)} to="/products">
            <div></div>ПРОДУКЦИЯ{" "}
          </NavLink>
          <NavLink onClick={() => setMenuBurger(false)} to="/analyze">
            <div></div>УСЛУГИ{" "}
          </NavLink>
          <NavLink onClick={() => setMenuBurger(false)} to="/newspromotions">
            <div></div>АКЦИИ И НОВОСТИ
          </NavLink>
          <NavLink onClick={() => setMenuBurger(false)} to="/contacts">
            <div></div>ОБРАТНАЯ СВЯЗЬ
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MenuDrawer;
