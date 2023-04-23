import "./App.css";
import Accounts from "./components/account/Accounts";
import Bonus from "./components/bonus/Bonus";
import { useSelector } from "react-redux";

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const account = useSelector((state) => state.account);
  return (
    <div className="App ">
      <h1>App</h1>
      {account.pending ? (
        <p>loading......</p>
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <h3>Current Amount : {amount}</h3>
      )}

      <h3>Bonus : {points}</h3>
      <hr />
      <Accounts></Accounts>
      <br />
      <hr />
      <Bonus></Bonus>
    </div>
  );
}

export default App;
