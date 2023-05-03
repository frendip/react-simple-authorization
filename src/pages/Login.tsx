import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AuthForm from '../components/AuthForm';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          setUser({
            email: userCredential.user.email,
            token: userCredential.user.refreshToken,
            id: userCredential.user.uid,
          }),
        );
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <h1 className="my-5 text-center">Авторизация</h1>
      <AuthForm handleClick={handleLogin} />
    </>
  );
};

export default Login;
