import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Stats from "./components/Stats";
import { decrement, increment } from "./features/counters/counterSlice";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => (
          <Counter
            count={counter.value}
            key={counter.id}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
        <Stats totalCount={totalCount} />

        <Posts />
      </div>
    </div>
  );
}

export default App;
