import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { isAuth, email, id, token } = useAuth();
  console.log(isAuth);
  return isAuth ? (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="my-5">Вы успешно залогинились</h1>
          <p className="lead mx-auto">Ваша почта: {email}</p>
          <p className="lead mx-auto">Ваш id: {id}</p>
          <p className="lead mx-auto">На этом все</p>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="login" />
  );
};

export default Home;
