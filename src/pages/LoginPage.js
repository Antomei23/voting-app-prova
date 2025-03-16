import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; // Stili opzionali

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui puoi aggiungere la logica per il login
    console.log('Username:', username);
    console.log('Password:', password);
    // Reindirizza alla dashboard o mostra un messaggio di errore
    navigate('/dashboard'); // Cambia con la tua route
  };

  return (
    <div className="login-container">
      <h1>Accedi</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nome utente</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Accedi</button>
      </form>
      <p>
        Non hai un account? <span onClick={() => navigate('/register')}>Registrati</span>
      </p>
    </div>
  );
};

export default LoginPage;