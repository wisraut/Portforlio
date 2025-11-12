import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./page/Home";
import Profile from "./page/Profile";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
