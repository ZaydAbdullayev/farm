import { useState } from "react";
import { useDispatch } from "react-redux";
import { acRemove } from "../../context/modal";
import socket from "../../../socket.config";
import milk_icon from "../../assets/milk.png";
import egg_icon from "../../assets/egg box.png";
import wheat_icon from "../../assets/wheat-sack.png";
import fertilizer_icon from "../../assets/fertilizer.png";
import { acOn } from "../../context/wheat";

export const CitizensModal = ({ open }) => {
  const [citizens, setCitizens] = useState([]);
  const dispatch = useDispatch();

  socket.on("citizens", (data) => {
    setCitizens(data);
  });

  return (
    <div className={`w100 df aic jcc modal blur15 ${open ? "show" : ""}`}>
      <div className=" df fdc aic modal-content">
        <span
          className="close-modal"
          onClick={() => dispatch(acRemove("citizen"))}
        >
          &times;
        </span>
        <h2>Citizens</h2>
        <div className="w100 df fw gap-10 citizen-container">
          {citizens.map((citizen) => (
            <figure className="df fdc gap-5 citizen-info" key={citizen.id}>
              <img src={citizen.avatar} alt="citizen" />
              <p>{citizen.name}</p>
            </figure>
          ))}
          {citizens.length === 0 && (
            <p style={{ margin: "auto" }}>No citizens found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export const InventoryModal = ({ open }) => {
  const dispatch = useDispatch();
  const milks = parseInt(localStorage.getItem("milk") || 0);
  const eggs = parseInt(localStorage.getItem("egg") || 0);
  const wheat = parseInt(localStorage.getItem("wheat") || 0);
  const fertilizers = parseInt(localStorage.getItem("fertilizer") || 0);

  const plant = () => {
    if (wheat < 1 && fertilizers < 1) return alert("Not enough resources.");
    localStorage.setItem("wheat", wheat - 1);
    localStorage.setItem("fertilizer", fertilizers - 1);
    dispatch(acOn());
  };

  return (
    <div className={`w100 df aic jcc modal blur15 ${open ? "show" : ""}`}>
      <div className=" df fdc aic modal-content">
        <span
          className="close-modal"
          onClick={() => dispatch(acRemove("inventory"))}
        >
          &times;
        </span>
        <h2>Inventory</h2>
        <div className="w100 df fw gap-10 citizen-container">
          <figure className="df fdc aic gap-5 citizen-info">
            <img src={wheat_icon} alt="citizen" />
            <p>{wheat}&times;</p>
            <div className="w100 df aic gap-5 btn-box">
              <button onClick={plant}>Plant</button>
              <button>Sale</button>
            </div>
          </figure>
          <figure className="df fdc aic gap-5 citizen-info">
            <img src={milk_icon} alt="citizen" />
            <p>{milks}&times;</p>
            <div className="w100 df aic gap-5 btn-box">
              <button>Sale</button>
            </div>
          </figure>
          <figure className="df fdc aic gap-5 citizen-info">
            <img src={egg_icon} alt="citizen" />
            <p>{eggs}&times;</p>
            <div className="w100 df aic gap-5 btn-box">
              <button>Sale</button>
            </div>
          </figure>
          <figure className="df fdc aic gap-5 citizen-info">
            <img src={fertilizer_icon} alt="citizen" />
            <p>{fertilizers}&times;</p>
            <div className="w100 df aic gap-5 btn-box">
              <button>Buy</button>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};
