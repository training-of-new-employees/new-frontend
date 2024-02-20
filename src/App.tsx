import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/UI/Header/Header';
import Main from './pages/Main/Main';
import './App.css';

function App() {
  return (
    <>
      <Header role="admin" />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}
