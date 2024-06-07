

const CoinBar = ({ progress }) => {
    const getColor = () => {
        return "#ffffff"
    }

   
    
    
     const getValue = () => {
        return progress;
      };
    
    
      return (
        <div className="bg-neutral h-6 rounded-lg bottom-0 fixed mb-20 left-5 right-15">
          <h2></h2>
          <div className=" shadow border rounded-lg" style={{ width: `${100}%`, backgroundColor : getColor() }}>
          <div className="bg-white h-5 shadow rounded-lg text-white" style={{ width: `${progress}%`, backgroundColor : getColor() }}>{getValue()}</div>
            </div>
        </div>
      );
    };
    
    export default CoinBar;
    