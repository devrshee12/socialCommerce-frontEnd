import React, { useState } from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer, CDBDropDown,
    CDBDropDownMenu,
    CDBDropDownItem,
    CDBDropDownToggle,} from 'cdbreact';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiRegisterUser } from '../actions/auth.action';
import { toast } from 'react-toastify';

const Register = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [number, setNumber] = useState("");
    const [role, setRole] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();

        if(role === ""){
            toast.error("Please select Role ");
        }
        else if(password !== confirmPassword){
            toast.error("Please match password and confirm password");
        }
        else{
            dispatch(apiRegisterUser({email, name, password, role, number}, navigate))
        }
    }

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"50px"}}>


      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4"> Register </p>
          </div>
          <div className="form-flex-row mb-n4">
            <div className="col">
              <CDBInput material hint="First name" type="text" placeholder='Name' value={name} onChange={(e) => {setName(e.target.value)}}/>
            </div>
            {/* <div className="col">
              <CDBInput material hint="Last name" type="text" placeholder='Last name'/>
            </div> */}
          </div>
          <CDBInput material hint="E-mail" type="email" placeholder='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          {/* <p className="text-muted text-center small mt-n4">At least 8 characters and 1 digit</p> */}
          <CDBInput material hint="Phone number" type="text" placeholder='Phone number' value={number} onChange={(e) => {setNumber(e.target.value)}}/>
          <CDBInput material hint="Password" type="password" placeholder='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          <CDBInput material hint="Password" type="password" placeholder='confirm password' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>
          {/* <p className="text-muted text-center small mt-n4">
            Optional - for two step authentication
          </p> */}
          <div className="d-flex justify-content-center align-items-center mt-4">
          <CDBDropDown>
            <CDBDropDownToggle color="primary" caret>{role ? role :"Select Role here "} {" >"}</CDBDropDownToggle>
            <CDBDropDownMenu dropright>
            {/* <CDBDropDownItem header >Cold place</CDBDropDownItem> */}
            <CDBDropDownItem onClick={() => {setRole("user")}}>User</CDBDropDownItem>
            <CDBDropDownItem onClick={() => {setRole("admin")}}>Admin</CDBDropDownItem>
            </CDBDropDownMenu>
        </CDBDropDown>
            
            {/* <p className="m-0">Subscribe to our newsletter</p> */}
          </div>
          <CDBBtn color="dark" className="btn-block my-3 mx-0" onClick={handleRegister}>
            Register
          </CDBBtn>
          
          <p className="text-center m-0">
            Already have an account?{' '}
            <CDBLink className="d-inline p-0" to="/login">
              Sign In
            </CDBLink>
          </p>
          <hr />
          <p className="text-center">
            By clicking <em>Sign up</em> you agree to our{' '}
            <CDBLink className="d-inline p-0" to="#">
              terms of service
            </CDBLink>
          </p>
        </CDBCardBody>
      </CDBCard>


    </div>
  );
};
export default Register;