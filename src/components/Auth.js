import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado exitosamente");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Autenticación</h3>
      <input
        className="form-control mb-2"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Correo electrónico"
      />
      <input
        className="form-control mb-2"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button className="btn btn-primary me-2" onClick={register}>Registrar</button>
      <button className="btn btn-success" onClick={login}>Iniciar Sesión</button>
    </div>
  );
}

export default Auth;
