import { formatNumber } from "../utils/FormatNumber";

const CoinBalance = ({count}) => {
    return ( 
        <>
        <div className="mt-6 flex flex-col items-center">
            <div className="mt-4">
                <div className="flex justify-evenly"> 
                <h2 className="text-4xl font-bold">🍬</h2>
            <h2 className="text-5xl text-white font-bold ">{formatNumber(count)}</h2>
                </div>


            </div>
            </div>
        </>
     );
}
 
export default CoinBalance;