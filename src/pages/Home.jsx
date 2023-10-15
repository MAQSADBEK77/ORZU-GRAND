import "./home.css";
import Hero from "../components/Hero";
import ProductsComponent from "../components/ProductsComponent";
import { productsData } from "../data/data";
import ServisesCart from "../components/ServisesCart";
import { servisesCartdata } from "../data/data";
import OKompaniyaComponent from "../components/OKompaniyaComponent";
import NewsCarts from "../components/NewsCarts";
import { homeNewsCarts } from "../data/data";
function Home() {
  return (
    <>
      <div className="hero">
        <Hero />
      </div>
      <ProductsComponent title={"ПРОДУКЦИЯ"} data={productsData} />
     
      <ServisesCart data={servisesCartdata} />
      <OKompaniyaComponent />
      <NewsCarts data={homeNewsCarts} />
    </>
  );
}

export default Home;
