import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";
import "./partners.css";
function Partners({ data }) {
  return (
    <div className="partners">
      <TitleComponent title="ПАРТНЕРЫ" />
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
                <Link to="/" key={item.id} className="cart">
                  <img src={item.img} />
                </Link>
              );
            })}
          </Tabs>
        </Box>
      </div>
    </div>
  );
}

export default Partners;
