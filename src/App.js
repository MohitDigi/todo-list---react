import { Routes ,  Route } from "react-router-dom";
import DetailForm from "./component/DetailForm";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-form" element={<DetailForm />} />
      </Routes>
     
    </>
  );
}

export default App;
