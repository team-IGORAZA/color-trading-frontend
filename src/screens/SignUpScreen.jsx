import React, { useState } from 'react';
import style from '../styles/signupScreen.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUpScreen() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

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
                navigate('/');
            })
            .catch(function (error) {
                if (error.response && error.response.data) {
                    setErrors(error.response.data.response);
                }
            });
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={errors.first_name ? errors.first_name[0] : 'Enter your name'}
                        className={errors.first_name ? style.errorInput : ''}
                    />

                    <p>Email</p>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={errors.email ? errors.email[0] : 'Enter your email'}
                        className={errors.email ? style.errorInput : ''}
                    />

                    <p>Phone</p>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={errors.phone ? errors.phone[0] : 'Enter your phone'}
                        className={errors.phone ? style.errorInput : ''}
                    />

                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder={errors.password ? errors.password[0] : 'Enter your password'}
                        className={errors.password ? style.errorInput : ''}
                    />

                    <p>Confirm Password</p>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder={errors.confirm_password ? errors.confirm_password[0] : 'Confirm your password'}
                        className={errors.confirm_password ? style.errorInput : ''}
                    />
                </div>
                {errors.password[0] === 'Passwords does not match' && (
                    <p className={style.errorText}>{errors.password[0]}</p>
                )}
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpScreen;
