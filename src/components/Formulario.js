import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const schema = yup.object().shape({
  nombre: yup.string().required("Nombre requerido"),
  email: yup.string().email("Email inválido").required("Email requerido")
});

function Formulario() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async data => {
    try {
      await addDoc(collection(db, "usuarios"), data);
      alert("Formulario enviado correctamente");
      reset();
    } catch (error) {
      alert("Error al enviar formulario: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <h3>Formulario de Registro</h3>

      <input
        className="form-control mb-2"
        placeholder="Nombre"
        {...register("nombre")}
      />
      <p className="text-danger">{errors.nombre?.message}</p>

      <input
        className="form-control mb-2"
        placeholder="Email"
        {...register("email")}
      />
      <p className="text-danger">{errors.email?.message}</p>

      <button className="btn btn-success">Enviar</button>
    </form>
  );
}

export default Formulario;
