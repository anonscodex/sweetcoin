import '../styles/custom.css';

const Container = ({children}) => {
    return (
        <div className="glowing-gradient p-4  min-h-screen">
          {children}
        </div>
      );
    };

export default Container;