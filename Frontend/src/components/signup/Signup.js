import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserContext from '../../Context/UserContext';
import { useContext } from 'react';
import Account from '../Account/Account';
import { useNavigate } from 'react-router-dom';
// import { response } from 'express';
import axios from 'axios';


function Signup() {
    const { user, login,token, setUsertoken} = useContext(UserContext);
    console.log(user);
    const nav = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    });


    async function submitForm(values){
        try{
            const response = await axios.post('http://localhost:3000/assests',{
                email: values.email,
                password: values.password
            });
            const token = response.data.token;
            setUsertoken(token)
            console.log(response);
            login(response.data)
            nav('/account')
        }
        catch (error) {
            console.error('sign Up failed');
        }
    }
    return (
        <div>
            {!user ?
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={submitForm}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>

                            <button type="submit" disabled={isSubmitting}>
                                SignUp
                            </button>
                        </Form>
                    )}
                </Formik> : <Account />}
        </div>
    )
}

export default Signup



    // const submitForm = (values, { setSubmitting }) => {
    //     console.log(values);
    //     values.token = "1234";
    //     login(values);
    //     setSubmitting(false);
    //     nav('/account')
    // }