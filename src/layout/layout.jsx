import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import "./layout.css";
import "../components/component.css";
import music from "../assets/music.mp3";
import { useEffect, useState } from "react";
import { RiMusicAiFill } from "react-icons/ri";
import Message from "../components/message";
import bg from "../assets/v.jpg";
import {
  CitizensModal,
  ConnectModal,
  InventoryModal,
} from "../components/modal";
import { useSelector } from "react-redux";

export const Layout = () => {
  const [audio] = useState(new Audio(music));
  const [isMusicStarted, setIsMusicStarted] = useState(false);
  const {
    citizen = false,
    inventory = false,
    connect = false,
  } = useSelector((state) => state.modals);

  useEffect(() => {
    const playMusic = () => {
      if (!isMusicStarted) {
        audio.loop = true;
        audio.volume = 0.1;
        audio.play().catch((err) => console.log("Autoplay blocked:", err));
        setIsMusicStarted(true);
      }
    };

    document.addEventListener("click", playMusic, { once: true });

    return () => document.removeEventListener("click", playMusic);
  }, [isMusicStarted, audio]);

  const toggleMusic = () => {
    if (audio.paused) {
      audio.volume = 0.1;
      audio.play();
    } else {
      audio.volume = 0.1;
      audio.pause();
    }
  };

  return (
    <div className="w100 df fdc aic app-container">
      <Navbar />
      <Outlet />
      <Message />
      <CitizensModal open={citizen} />
      <InventoryModal open={inventory} />
      <ConnectModal open={connect} />
      <img src={bg} alt="bg" className="village-bg" />
      <button className="close-music" onClick={toggleMusic}>
        <RiMusicAiFill />
      </button>
    </div>
  );
};
