import {Route, Routes, Navigate} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RPS from "./pages/RPS";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/rock_paper_scissors" element={<RPS/>}></Route>

      <Route path="/*" element={<Navigate to="/"/>}></Route>
    </Routes>
  )
}

export default App
