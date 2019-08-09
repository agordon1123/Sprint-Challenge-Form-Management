import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

const LoginForm = ({ status, values }) => {
    console.log('status: ', status)

    return (
        <Form>
            <Field
                type='text'
                name='username'
                placeholder='Username'
            />
            
            <Field
                type='password'
                name='password'
                placeholder='Password'
            />
            <button type='submit'>Submit</button>
        </Form>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(4, 'Username must be at least 4 characters')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be 6 characters or longer')
            .required('Password is required')
    }),

    handleSubmit(values, { setUser }) {
        console.log(values)
        Axios.post('http://localhost:5000/api/register', values)
        .then(res => {
            console.log('post res: ', res)
        })
        .catch(err => {
            console.log('err', err)
        })
    }
})(LoginForm);

export default FormikLoginForm;
