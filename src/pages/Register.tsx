import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <h1 className="my-5 text-center">Регистрация</h1>
      <AuthForm handleClick={handleRegister} />
    </>
  );
};

export default Register;
