import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import { Profile } from './pages/Profile/Profile';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/courses" element={<Profile />} />
      <Route path="/position" element={<Profile />} />
      <Route path="/employees" element={<Profile />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
