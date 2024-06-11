import { useState, useEffect } from "react";
import '../styles/custom.css';
import CoinBar from "./CoinBar";
import CoinBalance from "./CoinBalance";
import { formatNumber } from "../utils/FormatNumber";

const Coin = ({ setCount, count, setDecrementCount, decrementCount  }) => {
  const [animate, setAnimate] = useState(false);
  const initialBar = 1000;
  const tapNumber = 5;
  const decrementValue = 5;
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem('progress');
    return savedProgress !== null ? JSON.parse(savedProgress) : initialBar;
  });
  const [restoreProgress, setRestoreProgress] = useState(false);
 

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sweetCount', count);
  }, [count]);

  // Save progress to localStorage whenever it changes
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
      }, 1000); // Adjust interval time as needed
    }

    return () => clearInterval(interval);
  }, [restoreProgress]);

  const handleClick = () => {
    if (progress <= 0) return;

    setCount(prevCount => {
      const newCount = !isNaN(prevCount) ? prevCount + tapNumber : tapNumber;
    //  localStorage.setItem('sweetCount', newCount);
      return newCount;
    });

    setDecrementCount(prevCount => prevCount + 1); // Increment decrement count
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);

    // update bar
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
