// import socket from "../socket.config";
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Wheat from "../components/wheat";
import village from "../assets/village.jpg";

export const App = () => {
  const [scale, setScale] = useState(1);
  console.log("scale", scale);

  return (
    <div className="w100 df aic jcc contents">
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        onZoom={(ref) => setScale(ref.state.scale)}
      >
        {() => (
          <>
            <Controls />
            <TransformComponent style={{ width: "100%", height: "100%" }}>
              <div className="box">
                <img
                  src={village}
                  alt="village"
                  // style={{ transform: `scale(${scale})` }}
                  className="village-bg-item"
                />
                <div className="wheat-farm">
                  {Array.from({ length: 70 }, (_, index) => (
                    <Wheat key={index} maked={index} />
                  ))}
                </div>
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

const Controls = () => {
  return <div className="tools"></div>;
};
