import { Link } from "react-router-dom";

function TitlePages({ pagesName, breadCrumps }) {
  let breadSlash = false;
  return (
      <div className="titlePages">
          <div className="container">
      <h1 className="titlePages-left">{pagesName}</h1>
      <div className="titlePages-right">
        {breadCrumps.map((item) => {
          breadSlash ? (breadSlash = false) : (breadSlash = true);
          return (
            <Link key={item.name} className="breadLink" to={item.to}>
              {item.name}
              {breadSlash && <span>/</span>}
            </Link>
          );
        })}
      </div>
              
          </div>
    </div>
  );
}

export default TitlePages;
