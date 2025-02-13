import { useState, useEffect, useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useSelector, useDispatch } from "react-redux";
import Wheat from "../components/wheat";
import village from "../assets/v.jpg";
import { ChickenCoop } from "../components/chicken-coop";
import { acOff, acOn } from "../context/wheat";

export const App = () => {
  const maked = useSelector((state) => state.maked);
  const [timeLeft, setTimeLeft] = useState(600);
  const [wheat, setWheat] = useState(true);
  const timerRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + timeLeft * 1000;

    timerRef.current = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, Math.round((endTime - now) / 1000));
      setTimeLeft(remaining);

      if (remaining === 0) {
        dispatch(acOn());
        clearInterval(timerRef.current);
      }
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  console.log(maked);
  

  const collectWheat = () => {
    if (!maked) return;
    dispatch(acOff());
    setTimeLeft(600);
    setWheat(false);
    localStorage.setItem(
      "wheat",
      parseInt(localStorage.getItem("wheat") || 0) + 3
    );
  };

  return (
    <div className="w100 df aic jcc contents">
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {() => (
          <>
            <Controls />
            <TransformComponent style={{ width: "100%", height: "100%" }}>
              <div className="box">
                <img src={village} alt="village" className="village-bg-item" />
                <div className="wheat-farm">
                  {wheat && (
                    <>
                      {Array.from({ length: 70 }, (_, index) => (
                        <Wheat key={index} maked={maked} />
                      ))}
                      <div className="timer blur10" onClick={collectWheat}>
                        <h2>
                          {maked
                            ? "Collect"
                            : new Date(timeLeft * 1000)
                                .toISOString()
                                .substr(14, 5)}
                        </h2>
                      </div>
                    </>
                  )}
                </div>
                <div className="barn-container">
                  <ChickenCoop />
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
