import { Routes ,  Route } from "react-router-dom";
import DisplayItem from "./component/DisplayItem";
import DetailForm from "./component/DetailForm";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display-item" element={<DisplayItem />} />
        <Route path="/detail-form" element={<DetailForm />} />
      </Routes>
    </>
  );
}

export default App;
