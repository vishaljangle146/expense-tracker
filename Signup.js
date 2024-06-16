import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const { data } = await axios.post('/api/users/register', { username, password });
        console.log(data);
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
        button type = "submit" > Sign Up < /button> <
        /form>
    );
};

export default SignUp;