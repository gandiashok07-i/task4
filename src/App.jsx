import { useState } from "react";
import UserList from "./components/UserList";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">

      <h1>React Components Demo</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} Times
      </button>

      <UserList />

    </div>
  );
}

export default App;
