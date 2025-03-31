import "./App.css"
import Result_card from "./result_card/Result_card"
import Home from "./dashboard/Home.jsx"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/result" element={<Result_card />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
