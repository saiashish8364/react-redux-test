import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementHandlerByFive = () => {
    dispatch(counterActions.increment5(5));
  };
  const decrementHandlerByFive = () => {
    dispatch(counterActions.decrement5(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
