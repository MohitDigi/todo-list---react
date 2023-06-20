import { Routes ,  Route } from "react-router-dom";
import DisplayItem from "./component/DisplayItem";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display-item" element={<DisplayItem />} />
      </Routes>
    </>
  );
}

export default App;
