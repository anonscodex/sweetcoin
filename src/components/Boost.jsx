import CoinBalance from "./CoinBalance";
import { useState } from "react";

const Boost = ({count}) => {
    const [usesLeft, setUsesLeft] = useState(3);


    const handleUseBooster = () => {
        
        if (usesLeft > 0) {
          setUsesLeft(usesLeft - 1);
          // You can add the effect in the home app here
          console.log("Booster used! Effect applied to the home app.");
        } else {
          console.log("No uses left.");
        }
      };

    return ( 
        <>
        <div className="mt-10">
        <h2 className="text-center text-2xl ">Your Share Balance</h2>
        <CoinBalance count={count}/>
        </div>

        <div className="mt-5">
        
        <div className=""> <h2 className="text-2xl ml-4">Your daily boosters</h2></div>

    <div className="flex justify-evenly gap-5 mt-4">



        <div className="p-4 rounded shadow-md text-center flex border-2" onClick={handleUseBooster}>
        <div>
            <h1 className="text-5xl">🔥</h1>
        </div>
        <div>
        <h2 className="text-[16px]  mb-2">Tapping Guru</h2>
        <p className="mb-4">{usesLeft}/3</p> 
        </div>
      
    </div>
       
    
    
       

    <div className="p-4 rounded-lg shadow-md text-center flex border-2" onClick={handleUseBooster}>
        <div>
            <h1 className="text-5xl">⚡</h1>
        </div>
        <div>
        <h2 className="text-[16px] mb-2">Full Tank</h2>
        <p className="mb-4">{usesLeft}/3</p> 
        </div>
      
    </div>
    </div>
    </div>


    <div className=""> <h2 className="text-2xl ml-4 mt-5">Boosters</h2></div>

    



        <div className="p-4 rounded shadow-md text-center mt-3 mb-3 flex border-2" onClick={handleUseBooster}>
        <div>
            <h1 className="text-5xl">⚡</h1>
        </div>
        <div>
        <h2 className="text-xl  mb-2">Boost x2</h2>
        <p className="mb-4">{usesLeft}/3</p> 
        </div>
      
    </div>
       
    
    
       

    <div className="p-4 rounded shadow-md text-center flex mb-3 border-2" onClick={handleUseBooster}>
        <div>
            <h1 className="text-5xl">⚡</h1>
        </div>
        <div>
        <h2 className="text-xl mb-2">Multitap</h2>
        <p className="mb-4">{usesLeft}/3</p> 
        </div>
      
    </div>


    <div className="p-4 rounded shadow-md text-center flex mb-3 border-2" onClick={handleUseBooster}>
        <div>
            <h1 className="text-5xl">⚡</h1>
        </div>
        <div>
        <h2 className="text-xl mb-2">Energy Limit</h2>
        <p className="mb-4">{usesLeft}/3</p> 
        </div>
      
    </div>
    
    
        </>
     );
}
 
export default Boost;