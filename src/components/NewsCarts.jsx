import "./newsCart.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";
function NewsCarts({ data }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="newsCart">
        <div className="container">
          <TitleComponent title="НОВОСТИ" />
          <Box>
            <Tabs
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              aria-label="visible arrows tabs example"
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  "&.Mui-disabled": { opacity: 0.3 },
                },
              }}>
              {data.map((item) => {
                return (
                  <div key={item.id} className="cart">
                    <img src={item.img} alt={item.title} />
                    <div className="cart-item">
                      <h4>{item.title}</h4>
                      <span>{item.date}</span>
                      <p>{item.desciption}</p>
                      <Link to={`/products/${item.id}`}>Подробнее</Link>
                    </div>
                  </div>
                );
              })}
            </Tabs>
          </Box>
        </div>
      </div>
      <div className="news-bottom">
        <div className="container">
          <Link to="/newspromotions">
            Посмотреть все новости{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none">
              <g clip-path="url(#clip0_502_221)">
                <path
                  d="M30 14.7546C30 6.76329 23.2715 0.262695 15 0.262695C6.7285 0.262694 1.6232e-06 6.76329 1.27389e-06 14.7546C9.24573e-07 22.746 6.72967 29.2466 15 29.2466C23.2703 29.2466 30 22.746 30 14.7546ZM2.32377 14.7546C2.32377 8.00258 8.01006 2.50776 15 2.50776C21.9899 2.50776 27.6762 8.00258 27.6762 14.7546C27.6762 21.5078 21.9899 27.0015 15 27.0015C8.01006 27.0015 2.32377 21.5067 2.32377 14.7546Z"
                  fill="#00C9C9"
                />
                <path
                  d="M13.3966 21.1643L19.2061 15.5517C19.6569 15.1138 19.6569 14.4067 19.2061 13.9689L13.3966 8.35618C12.9621 7.99586 12.3196 7.99586 11.885 8.35618C11.3982 8.75918 11.3413 9.4686 11.7584 9.93897L16.7429 14.7547L11.7583 19.5816C11.3075 20.0194 11.3075 20.7265 11.7583 21.1643C12.2115 21.5999 12.9435 21.5999 13.3966 21.1643Z"
                  fill="#00C9C9"
                />
              </g>
              <defs>
                <clipPath id="clip0_502_221">
                  <rect
                    width="28.9839"
                    height="30"
                    fill="white"
                    transform="translate(30 0.262695) rotate(90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <a href="https://t.me/MaqsadbekWeb">
            Подписаться на новости{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none">
              <g clip-path="url(#clip0_502_230)">
                <path
                  d="M30 14.7546C30 6.76329 23.2715 0.262695 15 0.262695C6.7285 0.262694 1.6232e-06 6.76329 1.27389e-06 14.7546C9.24573e-07 22.746 6.72967 29.2466 15 29.2466C23.2703 29.2466 30 22.746 30 14.7546ZM2.32377 14.7546C2.32377 8.00258 8.01006 2.50776 15 2.50776C21.9899 2.50776 27.6762 8.00258 27.6762 14.7546C27.6762 21.5078 21.9899 27.0015 15 27.0015C8.01006 27.0015 2.32377 21.5067 2.32377 14.7546Z"
                  fill="#0D4C93"
                />
                <path
                  d="M13.3966 21.1643L19.2061 15.5517C19.6569 15.1138 19.6569 14.4067 19.2061 13.9689L13.3966 8.35618C12.9621 7.99586 12.3196 7.99586 11.885 8.35618C11.3982 8.75918 11.3413 9.4686 11.7584 9.93897L16.7429 14.7547L11.7583 19.5816C11.3075 20.0194 11.3075 20.7265 11.7583 21.1643C12.2115 21.5999 12.9435 21.5999 13.3966 21.1643Z"
                  fill="#0D4C93"
                />
              </g>
              <defs>
                <clipPath id="clip0_502_230">
                  <rect
                    width="28.9839"
                    height="30"
                    fill="white"
                    transform="translate(30 0.262695) rotate(90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsCarts;
