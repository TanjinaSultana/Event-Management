import React, { useContext } from 'react';
import { AuthContext } from '../firebase/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogle =()=>{
        googleSignIn().then(result=>{
            console.log(result.user);
        } )
    }
    return (
        <div className='ml-14'>
             <button onClick={handleGoogle} className="btn btn-primary">Google</button>
            
        </div>
    );
};

export default SocialLogin;