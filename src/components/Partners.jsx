import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import "./partners.css";
function Partners({ data }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(data);
  return (
    <div className="partners">
      <TitleComponent title="ПАРТНЕРЫ" />
      <div data-aos="fade-up" className="container">
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
            <div className="partner-items">
              {data.map((item) => {
                return (
                  <Link to="/" key={item.id} className="cart">
                    <img src={item.img} />
                  </Link>
                );
              })}
            </div>
            <div className="partner-items">
              {data.map((item) => {
                return (
                  <Link to="/" key={item.id} className="cart">
                    <img src={item.img} />
                  </Link>
                );
              })}
            </div>
          </Tabs>
        </Box>
      </div>
    </div>
  );
}

export default Partners;
