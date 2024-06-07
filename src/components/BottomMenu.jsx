
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';


const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-500 shadow-lg">
      <div className="flex justify-around py-2 ">
        <Link to='/refer'>
        <MenuItem icon="👩🏼‍🤝‍🧑🏻" name="Refer" />
        </Link>
        
        <Link to='/task'>
        <MenuItem icon="✅" name="Task" />
        </Link>
        
        <Link to='/'>
        <MenuItem icon="🍬" name="Tap" />
        </Link>
        
        
        <Link to='/boost'>
        <MenuItem icon="🔥" name="Boost" />
        </Link>
        
        <Link to='/stats'>
        <MenuItem icon="📊" name="Stats" />
        </Link>
        
      </div>
    </div>
  );
};

export default BottomMenu;
