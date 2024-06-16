import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime , onReset},
  ref
) {
  const dialogElement = useRef();
  const userLost = remainingTime <= 0;
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogElement.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialogElement} className="result-modal">
      {userLost && <p>You lost!!</p>}
      {!userLost && (
        <p>
          Your score is{" "}
          <strong>{((1 - remainingTime / (targetTime*1000) )* 100).toFixed(2)}</strong>
        </p>
      )}
      <h2>
        The Target Time is <strong>{targetTime} seconds</strong>
      </h2>
      <p>
        You stopped the timer with :{" "}
        <strong>{(remainingTime / 1000).toFixed(2)} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={()=> onReset(targetTime*1000)}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
