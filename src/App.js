import { Login } from "./Component/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
