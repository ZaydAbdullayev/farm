import { Link } from "react-router-dom";
import "./navbar.css";
import { acAdd } from "../../context/modal";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w100 df aic jcsb navbar">
      <i></i>
      <div className="df aic gap-15 links">
        <Link to="/" onClick={() => dispatch(acAdd("citizen"))}>
          Citizens
        </Link>
        <Link to="/">About</Link>
        <Link to="/" onClick={() => dispatch(acAdd("inventory"))}>
          Inventory
        </Link>
        <button onClick={() => dispatch(acAdd("connect"))}>Connect</button>
      </div>
    </div>
  );
};
