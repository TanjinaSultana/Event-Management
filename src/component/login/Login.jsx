/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { Link } from 'react-router-dom';
import SocialLogin from '../social/SocialLogin';

const Login = () => {
    const {googleSignIn,signIn,user} = useContext(AuthContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    // const handleGoogle =()=>{
    //     googleSignIn().then(result=>{
    //         console.log(result.user);
    //     } )
    // }
    const handleLogin =(e)=>{
        e.preventDefault()
if((email && password)){
  if(email == user?.email){

    signIn(email,password)
    .then(result => console.log(result.user) )
    .catch(err => setError(err.message))
  }else{
   console.log(email);
   console.log(user?.email);
  }
}
    }
    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">To Decorate Your Events With Us</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={(e) =>
setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={(e)=> setPassword(e.target.value) } type="password" placeholder="password" className="input input-bordered" required />
        </div>
          <p>{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          <label className="label">
            New Here?
            <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
          </label>
          {/* <button onClick={handleGoogle} className="btn btn-primary">Google</button> */}
          <SocialLogin></SocialLogin>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;