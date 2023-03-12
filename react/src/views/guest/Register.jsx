import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../context/ContextProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function Register() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [errors,setErrors] = useState(null);
  const {setToken} = useStateContext();

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);
  
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
      }) 
      .catch(({response})=>{
        if(response && response.status === 422)
        {
          setErrors(response.data.errors);
        }
      })
  }

  const resetField = () => {
    setErrors(null);
  }

  return (
    <section id="register-page">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card border-0 shadow">
              <div className="card-body text-center">
                <FontAwesomeIcon className="user-icon" icon={faCircleUser} />
                <h2 className="mb-4">Create an Account</h2>

                <form action="" onSubmit={register}>
                  <div className="form-group my-2">
                    <input ref={nameRef} className="form-control py-2" type="text" placeholder="Full Name"/>
                    {errors && errors.name && <p className="text-danger fs-6">{errors.name[0]}</p>}
                  </div>
                  
                  <div className="form-group my-2">
                    <input ref={emailRef} className="form-control py-2" type="email" placeholder="Email" />
                    {errors && errors.email && <p className="text-danger fs-6">{errors.email[0]}</p>}
                  </div>

                  <div className="form-group my-2">
                    <input ref={passwordRef} className="form-control py-2 mb-2" type="password" placeholder="Password"/>
                    <input ref={passwordConfirmationRef} className="form-control py-2" type="password" placeholder="Password Confirmation"/>
                    {errors && errors.password && <p className="text-danger fs-6">{errors.password[0]}</p>}
                  </div>

                  <div className="mt-4">
                    <input className="btn btn-primary mx-2" type="submit" value="Sign up" />
                    <input className="btn btn-danger mx-2" type="reset" value="Reset" onClick={resetField}/>
                    <p className="mt-4">Already have an account? <Link className="text-decoration-none" to="/login">Sign in.</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
