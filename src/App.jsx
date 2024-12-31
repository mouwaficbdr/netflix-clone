import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Home from "./pages/home"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.SIGN_IN}
          element={<p>I will be the sign in page</p>}
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={<p>I will be the sign up page</p>}
        />
        <Route
          path={ROUTES.BROWSE}
          element={<p>I will be the browse page</p>}
        />
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}