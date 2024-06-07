import CoinBalance from "./CoinBalance";

const Boost = ({count}) => {
    return ( 
        <>
            <div className="mt-10">
        <h2 className="text-center text-2xl ">Your Share Balance</h2>
        <CoinBalance count={count}/>
        </div>
        </>
     );
}
 
export default Boost;