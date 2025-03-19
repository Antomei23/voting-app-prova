import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;