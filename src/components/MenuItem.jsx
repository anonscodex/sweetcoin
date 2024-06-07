
const MenuItem = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl">{icon}</div>
      <span className="text-sm text-black mt-1 font-bold">{name}</span>
    </div>
  );
};

export default MenuItem;
