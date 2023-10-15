import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="logo-to" to="/">
      <div className="logo"></div>
    </Link>
  );
}

export default Logo;
