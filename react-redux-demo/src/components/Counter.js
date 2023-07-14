import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const incrementHandlerByFive = () => {
    dispatch({ type: "increment5" });
  };
  const decrementHandlerByFive = () => {
    dispatch({ type: "decrement5" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler} style={{ margin: "1rem" }}>
          Increment
        </button>
        <button onClick={decrementHandler} style={{ margin: "1rem" }}>
          Decrement
        </button>
        <button onClick={incrementHandlerByFive} style={{ margin: "1rem" }}>
          Increment5
        </button>
        <button onClick={decrementHandlerByFive} style={{ margin: "1rem" }}>
          Decrement5
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
