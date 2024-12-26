import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<p>I will be the sign in page</p>} />
        <Route path="/signup" element={<p>I will be the sign up page</p>} />
        <Route path="/browse" element={<p>I will be the browse page</p>} />
        <Route path="/" element={<Home />}
        />
      </Routes>
    </Router>
  );
}