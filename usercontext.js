import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

const initialState = {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            return { userInfo: action.payload };
        case 'LOGOUT':
            localStorage.removeItem('userInfo');
            return { userInfo: null };
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const login = async(username, password) => {
        const { data } = await axios.post('/api/users/login', { username, password });
        dispatch({ type: 'LOGIN', payload: data });
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return ( <
        UserContext.Provider value = {
            {...state, login, logout } } > { children } <
        /UserContext.Provider>
    );
};

export default UserContext;