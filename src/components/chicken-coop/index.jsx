import { useEffect, useState, useRef } from "react";
import hen1 from "../../assets/hen1.gif";
import hen2 from "../../assets/hen2.gif";
import hen3 from "../../assets/hen3.gif";
import hen4 from "../../assets/hen4.gif";
import hen5 from "../../assets/hen5.gif";
import barn from "../../assets/barn3.png";
import milk from "../../assets/milk.png";
import egg from "../../assets/egg.png";

export const ChickenCoop = () => {
  const [milkTime, setMilkTime] = useState(600);
  const [eggTime, setEggTime] = useState(300);

  const milkTimerRef = useRef(null);
  const eggTimerRef = useRef(null);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + milkTime * 1000;

    milkTimerRef.current = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, Math.round((endTime - now) / 1000));
      setMilkTime(remaining);

      if (remaining === 0) {
        clearInterval(milkTimerRef.current);
      }
    }, 1000);

    return () => clearInterval(milkTimerRef.current);
  }, [milkTime]);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + eggTime * 1000;

    eggTimerRef.current = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, Math.round((endTime - now) / 1000));
      setEggTime(remaining);

      if (remaining === 0) {
        clearInterval(eggTimerRef.current);
      }
    }, 1000);

    return () => clearInterval(eggTimerRef.current);
  }, [eggTime]);

  const collectMilk = () => {
    if (milkTime) return;
    setMilkTime(600);
    localStorage.setItem(
      "milk",
      parseInt(localStorage.getItem("milk") || 0) + 1
    );
  };

  const collectEgg = () => {
    if (eggTime) return;
    setEggTime(300);
    localStorage.setItem("egg", parseInt(localStorage.getItem("egg") || 0) + 1);
  };

  return (
    <div className="w100 df aic chicken-coop">
      <img src={hen1} alt="hen1" className="hen1 hen" />
      <img src={hen2} alt="hen2" className="hen2 hen" />
      <img src={hen2} alt="hen6" className="hen6 hen" />
      <img src={hen3} alt="hen3" className="hen3 hen" />
      <img src={hen4} alt="hen4" className="hen4 hen" />
      <img src={hen5} alt="hen5" className="hen5 hen" />
      <figure className="barn">
        <img src={barn} alt="barn" />
        <div className="df aic gap-5 products">
          <figure className="df aic gap-5 blur10" onClick={collectMilk}>
            <img src={milk} alt="milk" />
            <span>
              {milkTime
                ? new Date(milkTime * 1000).toISOString().substr(14, 5)
                : "Collect"}
            </span>
          </figure>
          <figure className="df aic gap-5 blur10" onClick={collectEgg}>
            <img src={egg} alt="egg" />
            <span>
              {eggTime
                ? new Date(eggTime * 1000).toISOString().substr(14, 5)
                : "Collect"}
            </span>
          </figure>
        </div>
      </figure>
      <img
        src="https://img1.picmix.com/output/stamp/normal/2/4/4/0/350442_befce.gif"
        alt="cow"
        className="cow"
      />

      <img
        src="https://img1.picmix.com/output/stamp/normal/9/0/9/6/1766909_6ffa7.gif"
        alt="cow"
        className="cow cow2"
      />
      <img
        src="https://img1.picmix.com/output/stamp/normal/9/0/9/6/1766909_6ffa7.gif"
        alt="cow"
        className="cow cow3"
      />
      <img
        src="https://img1.picmix.com/output/stamp/normal/2/4/4/0/350442_befce.gif"
        alt="cow"
        className="cow cow4"
      />
    </div>
  );
};
