import { Login } from "./Component/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Dashboard from "./Component/Dashbord";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
