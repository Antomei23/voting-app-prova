import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css'; // Stili opzionali

function HomePage(){
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Benvenuto!</h1>
      <p>Scegli un'opzione per continuare:</p>
      <div className="button-container">
        <button onClick={() => navigate('/login')}>Accedi</button>
        <button onClick={() => navigate('/register')}>Registrati</button>
      </div>
    </div>
  );
};

export default HomePage;