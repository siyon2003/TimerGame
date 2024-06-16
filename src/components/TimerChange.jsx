import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChange = ({ title, targetTime }) => {
  const [timeRemaining, setTimereminder] = useState(targetTime * 1000);
  let timer = useRef();
  let dialog = useRef();
  const timerisActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimereminder((prevTimer) => prevTimer - 10);
    }, 10);
  };
  const handleStop = () => {
      dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={setTimereminder}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerisActive ? handleStop : handleStart}>
            {timerisActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
      </section>
    </>
  );
};

export default TimerChange;
