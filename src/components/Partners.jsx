import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import "./partners.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Partners({ data }) {
  useEffect(() => {
    Aos.init();
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(data);
  return (
    <div data-aos="flip-down" className="partners">
      <TitleComponent title="ПАРТНЕРЫ" />
      <div className="container">
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
