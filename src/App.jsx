import useOnlineStatus from "./hooks/useOnlineStatus";
import useUpdateCounter from "./hooks/useUpdateCounter";
import "./App.css";
function App() {
  const onlineStaus = useOnlineStatus();

  const { count, Increase, Decrease } = useUpdateCounter(0);
  return (
    <>
      <div>status = {onlineStaus}</div>
      <button onClick={Increase}>increase</button>
      <button onClick={Decrease}>Decrease</button>
      count = {count}
    </>
  );
}

export default App;
