import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GameProvider } from "./context/mainContext";
import { GalleryProvider } from "./context/gallery/galleryContext";
import Home from "./pages/Home";
import Rules from "./pages/Rules";

function App() {
  return (
    <GameProvider>
      <GalleryProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </Router>
      </GalleryProvider>
    </GameProvider>
  );
}

export default App;
