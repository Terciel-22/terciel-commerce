import React, { useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../context/ContextProvider';

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors,setErrors] = useState(null);
  const {setUser,setToken} = useStateContext();

  const login = (ev) => {
    ev.preventDefault();
    setErrors(null);

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post("/login",payload)
      .then(({data}) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch(({response})=>{
        if(response && response.status === 422)
        {
          if(response.data.errors)
          {
            setErrors(response.data.errors);
          } else 
          {
            setErrors({
              password:[
                response.data.message,
              ]
            });
          }
        }
      })
  }

  return (
    <div>
      <form action="" onSubmit={login}>
        <h1>Login Account</h1>
        {errors && errors.email && <p>{errors.email[0]}</p>}
        <input ref={emailRef} type="email" placeholder="Email" /><br />
        {errors && errors.password && <p>{errors.password[0]}</p>}
        <input ref={passwordRef} type="password" placeholder="Password"/><br />
        <input type="submit" value="Login" />
        <input type="reset" value="Reset"/>
        <p>Not registered? <Link to="/register">Create an account.</Link></p>
      </form>
    </div>
  )
}
