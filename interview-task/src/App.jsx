import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/s1" replace />} />
        <Route path="/s1" element={<Screen1 />} />
        <Route path="/s2" element={<Screen2 />} />
      </Routes>
    </Router>
  );
}

export default App;
