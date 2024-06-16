import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(UserContext);

    const handleSubmit = async(e) => {
        e.preventDefault();
        await login(username, password);
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Username"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value) }
        /> <
        input type = "password"
        placeholder = "Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        /> <
        button type = "submit" > Login < /button> <
        /form>
    );
};

export default Login;