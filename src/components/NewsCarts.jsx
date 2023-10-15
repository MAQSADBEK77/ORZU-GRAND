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
                  <h4>{item.title}</h4>
                  <span>{item.date}</span>
                  <p>{item.desciption}</p>
                  <Link to={`/products/${item.id}`}>Подробнее</Link>
                </div>
              );
            })}
          </Tabs>
        </Box>
      </div>
    </div>
  );
}

export default NewsCarts;
