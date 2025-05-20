import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

function Upload() {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) return alert("Selecciona un archivo primero.");
    try {
      const storageRef = ref(storage, `uploads/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      alert("Archivo subido. URL: " + url);
    } catch (error) {
      alert("Error al subir archivo: " + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Subir Archivo</h3>
      <input className="form-control mb-2" type="file" onChange={e => setFile(e.target.files[0])} />
      <button className="btn btn-warning" onClick={uploadFile}>Subir</button>
    </div>
  );
}

export default Upload;
