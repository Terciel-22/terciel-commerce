import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../context/ContextProvider';

export default function Register() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [errors,setErrors] = useState(null);
  const {setUser,setToken} = useStateContext();

  const register = (ev) => {
    ev.preventDefault();
    setErrors(null);
    
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    axiosClient.post("/register",payload)
      .then(({data}) => {
        setToken(data.token);
        setUser(data.user);
      }) 
      .catch(({response})=>{
        if(response && response.status === 422)
        {
          setErrors(response.data.errors);
        }
      })
  }

  return (
    <div>
      <h1>Create Account</h1>
      <form action="" onSubmit={register}>

        {errors && errors.name && <p>{errors.name[0]}</p>}
        <input ref={nameRef} type="text" placeholder="Full Name"/><br />
        {errors && errors.email && <p>{errors.email[0]}</p>}
        <input ref={emailRef} type="email" placeholder="Email" /><br />
        {errors && errors.password && <p>{errors.password[0]}</p>}
        <input ref={passwordRef} type="password" placeholder="Password"/><br />
        <input ref={passwordConfirmationRef} type="password" placeholder="Password Confirmation"/><br />
        <input type="submit" value="Register" />
        <input type="reset" value="Reset"/>
        <p>Already have an account? <Link to="/login">Sign in.</Link></p>
      </form>
    </div>
  )
}
