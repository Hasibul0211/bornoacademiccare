import React, { useRef, useState } from 'react';
import "./Login.css"
import img from "../../photos/login2.png"
import { useNavigate } from 'react-router-dom';




const Login = () => {

    const [data, setData] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    // login details
    const emailField = useRef();
    const passField = useRef();



    const loginForm = () => {
        setData(true)
    }
    const handleOnChange = () => {
        const emailValue = emailField.current.value;
        setEmail(emailValue)

        const passValue = passField.current.value;
        setPassword(passValue)
    }

    console.log(password);
    // navigate code here
    const navigate = useNavigate()
    const loginBtn = (e) => {

        if (email === process.env.REACT_APP_EMAIL && password === process.env.REACT_APP_PASSWORD) {
            navigate('/home')
        }
        else {
            alert('username or password missmatch')
        }

        e.preventDefault()
    }



    // Register details

    const regiterForm = () => {
        setData(false)
    }
    const [regName, setRegName] = useState('')
    const [regEmail, setRegEmail] = useState('')
    const [regPass, setRegPass] = useState('')

    const regNameField = useRef()
    const regEmailField = useRef()
    const regPassField = useRef()


    const onChangeReg = () => {
        const regNameValue = regNameField.current.value;
        setRegName(regNameValue)

        const regEmailValue = regEmailField.current.value;
        setRegEmail(regEmailValue)

        const regPassValue = regPassField.current.value;
        setRegPass(regPassValue)
    }
    const registerBtn = (e) => {
        const user = {
            name: regName,
            email: regEmail,
            password: regPass
        }
        alert('register button clicked')

        e.preventDefault()
        e.target.reset()

    }

    return (
        <div className='loginContainer'>
            <h1>Borno Academic Care</h1>
            <p>"management system software for owner"</p>

            <div className='login-container'>
                <div className='login-style'>
                    <img src={img} alt="this is login img" />
                </div>
                <div className='secondPart'>
                    <div className='btn-group'>
                        <button onClick={loginForm}>Login here</button>
                        <button onClick={regiterForm}>Register here</button>
                    </div>
                    <div className='form-section'>

                        {/* login form here */}

                        {
                            data ? <form onSubmit={loginBtn}>
                                <input type="text" placeholder='Enter Your Email' ref={emailField} onChange={handleOnChange} />
                                <br />
                                <input type="password" placeholder='Enter Your Password' ref={passField} onChange={handleOnChange} />
                                <br />
                                <button type="submit">Login</button>

                            </form>
                                :
                                <form onSubmit={registerBtn}>
                                    <input type="text" placeholder='Enter your name' ref={regNameField} onChange={onChangeReg} />
                                    <br />
                                    <input type="text" placeholder='Enter your email' ref={regEmailField} onChange={onChangeReg} />
                                    <br />
                                    <input type="password" placeholder='Enter your password' ref={regPassField} onChange={onChangeReg} />
                                    <br />
                                    <input type="password" placeholder='Retype your password' />
                                    <br />
                                    <button type="submit">Register</button>
                                </form>
                        }

                        {/* register form here */}

                    </div>
                </div>
            </div>


        </div >
    );
};

export default Login;