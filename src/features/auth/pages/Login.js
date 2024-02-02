import React, { useState } from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer, CDBLink} from 'cdbreact';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { apiLoginUser } from '../actions/auth.action';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(apiLoginUser({email, password}, navigate))
    }

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"120px"}}>

      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4 font-weight-bold"> Login </p>
          </div>
          <CDBInput label="E-mail" type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          <CDBInput label="Password" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          <p className="mt-n3 text-end ">
            <CDBLink className="p-0" to="/forgot-password">
                <p className='font-weight-bold'>Forgot Password ?</p>
              
            </CDBLink>
          </p>
          <CDBBtn color="dark" className="btn-block my-4 mx-0" onClick={handleLogin}>
            Login
          </CDBBtn>
          
          <hr />
          <p className="text-center">
            Not a member?{' '}
            <CDBLink className="d-inline p-0" to="/register">
              Sign up
            </CDBLink>
          </p>
        </CDBCardBody>
      </CDBCard>

    </div>

  );
};
export default Login;