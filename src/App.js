import Dashboard from "./Component/Dashbord";
import { Login } from "./Component/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
