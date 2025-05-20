import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ProductList from './components/ProductList';
import Formulario from './components/Formulario';
import Auth from './components/Auth';
import Upload from './components/Upload';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-3">Tienda React</h1>

        <nav className="mb-4">
          <Link className="btn btn-outline-primary me-2" to="/">Productos</Link>
          <Link className="btn btn-outline-secondary me-2" to="/form">Formulario</Link>
          <Link className="btn btn-outline-success me-2" to="/auth">Auth</Link>
          <Link className="btn btn-outline-warning" to="/upload">Subir Archivos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/form" element={<Formulario />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
