import { useState, useEffect } from "react";
import '../styles/custom.css';
import CoinBar from "./CoinBar";
import CoinBalance from "./CoinBalance";
import { formatNumber } from "../utils/FormatNumber";

const Coin = ({ setCount, count, setDecrementCount, decrementCount, setResetProgress }) => {
  const [animate, setAnimate] = useState(false);
  const initialBar = 1000;
  const tapNumber = 5;
  const decrementValue = 5;
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem('progress');
    return savedProgress !== null ? JSON.parse(savedProgress) : initialBar;
  });
  const [restoreProgress, setRestoreProgress] = useState(false);

  useEffect(() => {
    localStorage.setItem('sweetCount', count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem('progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    let interval;
    if (restoreProgress) {
      interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress < initialBar) {
            return prevProgress + decrementValue;
          } else {
            setRestoreProgress(false);
            return initialBar;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [restoreProgress]);

  const handleClick = () => {
    if (progress <= 0) return;
    setCount(prevCount => prevCount + tapNumber);
    setDecrementCount(prevCount => prevCount + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);

    setProgress(prevProgress => {
      const newProgress = prevProgress - decrementValue;
      if (newProgress <= 0) {
        setRestoreProgress(true);
        return 0;
      } else {
        return newProgress;
      }
    });
  };

  const handleResetProgress = () => {
    setProgress(initialBar);
  };

  useEffect(() => {
    setResetProgress(() => handleResetProgress);
  }, [setResetProgress]);

  return (
    <>
      <CoinBalance count={count} />
      <div className="flex flex-col items-center justify-center p-8 m-4">
        {animate && (
          <span className="text-neutral-500 text-3xl font-bold absolute top-30 z-50">
            +{formatNumber(decrementValue)}
          </span>
        )}
        <h2
          className={`cursor-pointer text-[240px] ${animate ? 'animate-pop' : ''}`}
          onClick={handleClick}
        >
          🍬
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-white text-xl mb-4 text-center fixed bottom-28">
          ⚡{progress}/{initialBar}
        </h2>
        <div className="w-full flex justify-center">
          <CoinBar progress={progress} />
        </div>
      </div>
    </>
  );
};

export default Coin;
