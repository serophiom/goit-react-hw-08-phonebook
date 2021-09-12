import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/contacts/contacts-actions';
import * as contactsSelectors from '../redux/contacts/contacts-selectors'; 
import './Filter.css';

const Filter = () => {

    const contacts = useSelector(contactsSelectors.getShowContacts);
    const filter = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();


    function getFilteredName (event) {
        const { value } = event.currentTarget;
        handleFilter(value);
    }

    const handleFilter = value => {
        dispatch(changeFilter(value))
    };

    return contacts.length !== 0 ? (
        <div className="filter-container">
        <label className="filter-label">
            Find contact  <input
            className="filter-input"
            type="text"
            name="filter"
            value={filter}
            onChange={getFilteredName}
        />
        </label>
        
        </div>
        ) : (
        <p>There is no contacts in your Phonebook</p>
    )
};

export default Filter;