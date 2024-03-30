import React, {useContext, useState} from 'react';
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/login.css';
import loginImg from '../assets/login.png';
import userIcon from '../assets/user.png';

import {AuthContext} from "../context/AuthContext";
import {BASE_URL} from "../utils/config";

function Login(props) {

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })

    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)

    function handleChange(e) {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
        console.log(setCredentials)
    }

    async function handleClick(e) {
        e.preventDefault()

        dispatch({type: 'LOGIN_START'})

        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(credentials)
            })

            const result = await res.json()

            if (!res.ok) alert(result.message)

            console.log(result.data);

            dispatch({type: 'LOGIN_SUCCESS', payload: result.data})
            navigate('/')
        } catch (err) {
            dispatch({type:'LOGIN_FAILURE',payload:err.message})
        }
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={loginImg} alt="loginImg"/>
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="userIcon"/>
                                </div>
                                <h2>Login</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="email" placeholder='Email' required id='email'
                                               onChange={handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder='Password' required id='password'
                                               onChange={handleChange}/>
                                    </FormGroup>
                                    <Button className='btn secondary__btn auth__btn' type='submit'>
                                        Login
                                    </Button>
                                </Form>
                                <p>Don't have an account? <Link to='/register'>Create</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Login;