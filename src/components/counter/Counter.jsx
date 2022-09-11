import React from "react";
import { useState } from "react";
import "./counter.scss";

function useIncrement(initial, step) {
  const [count3, setCount3] = useState(initial);
  const increment = () => {
    setCount3((c) => c + step);
  };
  return [count3, increment];
}

const Counter = () => {
  const [count3, increment] = useIncrement(0, 3);

  /////////////////////////////////// COUNT /////////////////////////
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClickCounter = (e) => {
    e.preventDefault();
    // setCount(count + 1);
    setCount((c) => c + 1);
    // Mieux vaut utiliser un callback
  };

  const handleClickCounter2 = (e) => {
    e.preventDefault();
    // setCount(count + 1);
    setCount2((c) => c + 2);
    // Mieux vaut utiliser un callback
  };

  ///////////////////////////// STATE /////////////////////////////

  const [state, setState] = useState({
    x: 1,
  });

  const modifieValeurObject = (e) => {
    e.preventDefault();
    setState({
      count: 10,
    });
  };

  const addValueToObject = (e) => {
    e.preventDefault();
    setState((state) => {
      return { ...state, count: 10 };
      // on retourne l'état, et on rajoute une clé qui vaut 10
    });
  };

  return (
    <div>
      <button onClick={increment}>Incrémenter de 1 : {count3}</button>
      <button onClick={handleClickCounter2}>Incrémenter de 2 : {count2}</button>
      <div>
        <button onClick={modifieValeurObject}>{JSON.stringify(state)}</button>
      </div>
      <div>
        <button onClick={addValueToObject}>{JSON.stringify(state)}</button>
      </div>
    </div>
  );
};

export default Counter;
