import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import List from "./components/List";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/list" />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
