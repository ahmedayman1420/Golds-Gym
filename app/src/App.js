// ========---======== < Basic-Elements > ========---======== //
import "./App.css";

// ========---======== < React-Router-Dom > ========---======== //
import { Routes, Route } from "react-router-dom";

// ========---======== < External-Components > ========---======== //
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import ExerciseDetails from "./Pages/ExerciseDetails/ExerciseDetails";

// ========---======== < Component > ========---======== //
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/details/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
