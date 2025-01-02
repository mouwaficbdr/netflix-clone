import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Signin, Signup, Browse } from './pages'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.SIGN_IN}
          element={<Signin />}
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={<Signup />}
        />
        <Route
          path={ROUTES.BROWSE}
          element={<Browse />}
        />
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}