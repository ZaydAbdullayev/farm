import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import "./layout.css";
import "../components/component.css";
import music from "../assets/music.mp3";
import { useState } from "react";
import { RiMusicAiFill } from "react-icons/ri";
import Message from "../components/message";
import bg from "../assets/village.jpg";
import { CitizensModal } from "../components/modal";
import { useSelector } from "react-redux";

export const Layout = () => {
  const [audio] = useState(new Audio(music));
  const { citizen = null } = useSelector((state) => state.favDatas);

  // const playMusic = () => {
  //   audio.loop = true;
  //   // volume is between 0 and 1
  //   audio.volume = 0.1;
  //   audio.play();
  // };

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
      <img src={bg} alt="bg" className="village-bg" />
      <button className="close-music" onClick={toggleMusic}>
        <RiMusicAiFill />
      </button>
    </div>
  );
};
