import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import { Home } from "./pages";

function App() {
  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
