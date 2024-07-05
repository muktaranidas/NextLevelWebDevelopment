import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterWithClass from "./components/CounterWithClassComponents";
import CounterWithFunctionalComponent from "./components/CounterWithFunctionalComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterWithClass />
      <CounterWithFunctionalComponent></CounterWithFunctionalComponent>
    </div>
  );
}

export default App;
