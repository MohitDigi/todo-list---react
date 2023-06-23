import { Routes ,  Route } from "react-router-dom";
import DetailForm from "./component/DetailForm";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Update from "./component/CRUD/Update";
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-form" element={<DetailForm />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
