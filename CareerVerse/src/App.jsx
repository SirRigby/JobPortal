import { useState } from "react";
import "./App.css";
import "./components/MainPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
