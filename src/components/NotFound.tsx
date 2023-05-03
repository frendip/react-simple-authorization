import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Row className="justify-content-center">
      <Col md={10}>
        <h1>Страница не найдена</h1>
        <p>
          Извините, такой страницы не существует. Пожалуйста, вернитесь на предыдущую страницу или
          перейдите на главную страницу.
        </p>
        <Button
          onClick={() => navigate(-1)}
          style={{ background: 'rgba(221, 160, 221, 0.85)' }}
          className={'btn-outline-light'}
          size="lg">
          Вернуться на назад
        </Button>
      </Col>
    </Row>
  );
};

export default NotFound;
