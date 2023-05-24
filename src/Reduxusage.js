import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./reduxpractise/actions/index";

const ReduxUsage = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Increment/decrement counter</h1>
        <div>
          <button title="Decrement" onClick={() => dispatch(decNumber())}>
            <span className="pointer">-</span>
          </button>
          <input type="text" value={myState} />
          <button title="increment" onClick={() => dispatch(incNumber())}>
            <span className="pointer">+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReduxUsage;
