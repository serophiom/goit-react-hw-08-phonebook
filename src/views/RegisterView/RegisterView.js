import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import { addContact } from '../../redux/contacts/contacts-operations';
import * as authOperations from '../../redux/auth/auth-operations';
// import { getLoading } from '../../redux/auth/auth-selectors';
// import { getContacts } from 'redux/contacts/contacts-selectors';
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

    // const reset = () => {
    //    setName('');
    //    setNumber('');
    //    setPassword('');
    // };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-form">
        <label>
            Name<input
            className="register-input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="name"
        /> 
        </label>
        <label>
            Email<input
            className="register-input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email"
            />
        </label>
        <label>
            Password<input
            className="register-input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
            />
        </label>

        <button className="btn-add" type="submit">Sinup</button>
    </div>  
    </form>
);
};

export default RegisterView;