import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
// import { addContact } from '../../redux/contacts/contacts-operations';
// import { getContacts } from 'redux/contacts/contacts-selectors';
import './LoginView.css';

const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    // const formSubmitHandler = ( name, number ) => {
    //     const alreadyAddedContact = contacts.find(contact => contact.name === name);
    //     if (alreadyAddedContact) {
    //         alert(`${alreadyAddedContact.name} is already in contacts`);
    //         return;
    //     }

    //     dispatch(addContact( name, number ));
    // };

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
        <label>
            Email<input
            className="login-input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email"
            />
        </label>
        <label>
            Password<input
            className="login-input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
            />
        </label>

        <button className="btn-add" type="submit">Login</button>
    </div>  
    </form>
);
};

export default LoginView;