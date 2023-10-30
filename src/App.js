import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ThankYou from "./Pages/thank-you";
import Home from "./Pages/home";

function App() {
  const navigate = useNavigate();

  // function increaseWidth(increment) {
  //   // Increase the width by 20%
  //   setProgress((prevWidth) => prevWidth + increment);
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
