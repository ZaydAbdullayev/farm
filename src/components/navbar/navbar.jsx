import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="w100 df aic jcsb navbar">
      <i></i>
      <div className="df aic gap-15 links">
        <Link to="/">Sitizens</Link>
        <Link to="/">About</Link>
        <Link to="/">Inventory</Link>
        <button onClick={() => alert("Connecting...")}>Connect</button>
      </div>
    </div>
  );
};
