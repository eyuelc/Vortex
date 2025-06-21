import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Dash from './pages/dashboard';
import ClanList from './components/clanlist'; // Pcard content
import DmList from './components/DmList';     // another panel content

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dash />}>
          <Route index element={<Navigate to="clan" replace />} />

          <Route path="clan" element={<ClanList />} />
          <Route path="clan/:id" element={<ClanList />} />
          <Route path="dms" element={<DmList />} />
          <Route path="dms/:id" element={<DmList />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
