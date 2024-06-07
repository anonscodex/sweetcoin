import CoinBalance from "./CoinBalance";

const Stats = ({ decrementCount, count }) => {
    return ( 
        <>
        <div className="mt-10">
        <h2 className="text-center text-2xl ">Total Share Balance</h2>
        <CoinBalance count={count}/>
        </div>

        <div className="mt-10">
        <h2 className="text-center text-xl ">Total Touches</h2>
        <CoinBalance decrementCount={decrementCount}/>
        </div>
        </>
     );
}
 
export default Stats;