import { useState, useEffect } from "react";
import '../styles/custom.css';
import CoinBar from "./CoinBar";
import CoinBalance from "./CoinBalance";
import { formatNumber } from "../utils/FormatNumber";

const Coin = ({ setCount, count ,setDecrementCount }) => {
    const [animate, setAnimate] = useState(false);
    

    const initialBar = 1000;
    const tapNumber = 5;
    var decrementValue = 5;

    const [progress, setProgress] = useState(initialBar);
    const [restoreProgress, setRestoreProgress] = useState(false)

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

        if (!isNaN(count)) {
            setCount(count + tapNumber);
        } else {
            setCount(tapNumber); // Default to tapNumber if count is NaN
        }

        setDecrementCount(prevCount => prevCount + 1); // Increment decrement count
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);

// update bar
        if (!isNaN(progress) && progress > 0) {
            setProgress(prevProgress => {
                const newProgress = prevProgress - decrementValue;
                if (newProgress <= 0) {
                  setRestoreProgress(true);
                  return 0;
                } else {
                  return newProgress;
                }
            });
            
        } else {
            setProgress(initialBar); // Reset to initialBar if progress is NaN
          }
    };

    return (
        <>
            <CoinBalance count={count}/>
            <div className="flex flex-col items-center justify-center p-8 m-4">
                {/* Display decrement count with popping up effect */}
        {animate && (
          <span className="text-neutral-500 text-3xl font-bold absolute top-30 z-50">
            +{formatNumber(decrementValue)}
          </span>
        )}
                <h2
                    className={`cursor-pointer  text-[240px] ${animate ? 'animate-pop' : ''}`}
                    onClick={handleClick}
                >
                    🍬
                </h2>
            </div>
            <h2 className="text-white bottom-0 fixed mb-28 text-xl text-center items-center">
            ⚡{progress}/{initialBar}
            </h2>
            <CoinBar progress={progress} />
        </>
    );
};

export default Coin;
