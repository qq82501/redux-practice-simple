import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isCounterShown = useSelector((state) => state.counter.isCounterShown);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = function () {
    dispatch(counterActions.increment());
  };
  const increaseHandler = function () {
    dispatch(counterActions.increase({ amount: 5 }));
  };
  const decrementHandler = function () {
    dispatch(counterActions.decrement);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterShown && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={incrementHandler}>increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
