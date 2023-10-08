/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../firebase/AuthProvider';

const Register = () => {
    const {signUp}= useContext(AuthContext) 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    
    const handleRegister = (e) =>{
        e.preventDefault()
        if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)        ) {
           setError("")

           if(email){

               signUp(email,password)
               .then(result => console.log(result.user))
           }
          } else {
            setError("Minimum 6 length,One capital Letter,a special chracter")
          }
          

    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold">Register now!</h1>
    <p className="py-6">To Decorate Your Events With Us</p>
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text" >Email</span>
        </label>
        <input onChange={(e) =>
setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text"
          >Password</span>
        </label>
        <input onChange={(e)=> setPassword(e.target.value) } type="password" placeholder="password" className="input input-bordered" required />
        <p>{error}</p>
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button onClick={handleRegister} className="btn btn-primary" >Register</button>
        <button className="btn btn-primary">Google</button>
      </div>
    </form>
  </div>
</div>
</div>
      </div>
    );
};

export default Register;