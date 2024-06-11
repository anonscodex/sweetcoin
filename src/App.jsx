import { useState } from "react"
import Container from "./components/Container"
import Coin from "./components/Coin"
import CoinBar from "./components/CoinBar"
import BottomMenu from "./components/BottomMenu"
import CoinBalance from "./components/CoinBalance"
import { BrowserRouter, Route , Routes } from "react-router-dom"
import Stats from "./components/Stats"
import Boost from "./components/Boost"
import Task from "./components/Task"
import Refer from "./components/Refer"



function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('sweetCount');
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
  const [decrementCount, setDecrementCount] = useState(() => {
    const savedCount = localStorage.getItem('tap');
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });


  
  const task = {
    title: 'Follow our Twitter Page',
    link: 'https://twitter.com/example',
    linkText: 'Follow us on Twitter',
    reward: 500,
  };

  return (
    <>
    <BrowserRouter>
      
      <Container>
         <Routes>
          <Route path="/" element = {<Coin count={count} setCount={setCount} setDecrementCount={setDecrementCount}/>} />
          <Route path="stats" element = {<Stats count={count} setCount={setCount} decrementCount={decrementCount} setDecrementCount={setDecrementCount}/>} />
          <Route path="boost" element = {<Boost count={count} setCount={setCount} />} />
          <Route path="task" element = {<Task task={task} count={count} setCount={setCount}/>} />
          <Route path="refer" element = {<Refer />} />
        </Routes>
        <BottomMenu />
      </Container>
      
    
    </BrowserRouter>
      
    </>
  )
}

export default App
