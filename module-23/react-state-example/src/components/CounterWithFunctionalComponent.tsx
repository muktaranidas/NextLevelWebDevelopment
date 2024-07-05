import { useState } from "react";

const CounterWithFunctionalComponent = () => {
   const [count,setCount] = useState(0)
    return (
        <div className="border border-red-500">
             <button  onClick={() => setCount((prev)=>prev+1)}>
            {count}
        </button>
       </div>
    );
};

export default CounterWithFunctionalComponent;