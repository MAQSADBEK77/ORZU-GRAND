import "./carousel.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Carousel({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  let count = 0;
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data[0].length) {
      newIndex = data[0].length - 1;
    }
    setActiveIndex(newIndex);
  };
  setInterval(() => {
    data[0].length - 1 == count ? (count = 0) : (count = count + 1);
  }, 3500);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(count);
    }, 3500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container carousel">
      <div
        style={{ transform: `translate(-${activeIndex * 105.7}%)` }}
        className="inner">
        {data[0].map((item) => {
          return (
            <div key={item.id} className="carousel-item">
              <div className="carousel-left">
                <h1>{item.title}</h1>
                <p>{item.desciption}</p>
                <Link to={`product/${item.id}`}>Подробнее</Link>
              </div>
              <div className="carousel-right">
                <img src={item.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="carousel-buttons">
        <div className="indicators">
          {data[0].map((item, index) => (
            <button
              onClick={() => updateIndex(index)}
              className={`indicators-buttons ${
                index == activeIndex && "indicator-active"
              }`}
              key={item.id}></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
