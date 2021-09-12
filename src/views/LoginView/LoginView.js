import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import './LoginView.css';

const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = ({target: { name, value }}) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(login({ email, password }));
        setEmail('');
        setPassword('');
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-form">
        <label className="login-label">
            <input
            className="login-input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            />
        </label>
        <label className="login-label">
            <input
            className="login-input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            />
        </label>

        <button className="btn-add" type="submit">Login</button>
    </div>  
    </form>
);
};

export default LoginView;