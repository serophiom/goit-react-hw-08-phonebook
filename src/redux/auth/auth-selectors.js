export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.name;
export const getLoading = state => state.auth.isLoading;
export const getError = state => state.auth.error;



// export const getContacts = state => state.contacts.items;
// export const getFilter = state => state.contacts.filter;

// export const getShowContacts = createSelector(
//     [getContacts, getFilter], (contacts, filter) => {
//         const toLowerCase = filter.toLowerCase();
//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(toLowerCase));
//     }
// );