import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface AuthFormProps {
  handleClick: (email: string, password: string) => void;
}
const AuthForm: FC<AuthFormProps> = ({ handleClick }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Button
        onClick={() => handleClick(email, password)}
        className={'btn-outline-light'}
        style={{ background: 'rgba(221, 160, 221, 0.85)' }}>
        Submit
      </Button>
    </Form>
  );
};

export default AuthForm;
