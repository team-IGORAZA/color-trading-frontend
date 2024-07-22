
import React, { useState } from 'react';
import style from '../styles/signupScreen.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function SignUpScreen() {

    const navigate = useNavigate()


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/v1/user/register/', {
            first_name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            confirm_password: formData.confirmPassword
        })
            .then(function (response) {
                navigate('/')
            })
            .catch(function (error) {
                console.log(error.response.data.response);
            });
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>name</p>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    <p>email</p>
                    <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
                    <p>phone</p>
                    <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                    <p>password</p>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                    <p>Confirm password</p>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpScreen;