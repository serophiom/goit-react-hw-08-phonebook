import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import './RegisterView.css';

const RegisterView = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: { name, value }}) => {
        switch (name) {
            case 'name':
                return setName(value);
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

        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="input-form">
        <label className="register-label">
            <input
            className="register-input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
        /> 
        </label>
        <label className="register-label">
            <input
            className="register-input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            />
        </label>
        <label className="register-label">
            <input
            className="register-input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            />
        </label>

        <button className="btn-add" type="submit">Sign up</button>
    </div>  
    </form>
);
};

export default RegisterView;