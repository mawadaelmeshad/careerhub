import './css-components/reset.css'
import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
from 'mdb-react-ui-kit';
import {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
function Changepass() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const navigate = useNavigate();
    console.log(typeof(password));
    console.log(typeof(mail));

    const submit = (e)=>{
        e.preventDefault()
        axios.post('https://civet-top-actively.ngrok-free.app/api/reset-password',{
            email:mail,
            password:password,
            password_confirmation:confirmation
        })
        .then(()=>navigate("/signin"))
            .catch(()=>swal("something went wrong, try again!"))
            if (password !== confirmation) {
                // Display an error message or handle the mismatch
                swal("Passwords do not match");
                return; // Prevent further execution of the registration process
            }
        }

    return (
        <MDBContainer fluid id='reset'>
            <MDBRow className='d-flex justify-content-center align-items-center'>
                <MDBCol lg='8' className='my-5'>
                    <h2 class="text-white mb-4">Change Password</h2>
                    <form>
                        <MDBCard>
                            <MDBCardBody className='px-4'>
                            <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Email</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5'>
                                        <MDBInput label='example@gmail.com' size='lg' id='form2' type='email' required onChange= 
                                            {(e)=>setMail(e.target.value)}/>
                                    </MDBCol>

                                </MDBRow>
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">New Password</h6>
                                    </MDBCol>
                                    <MDBCol md='9' className='pe-5'>
                                        <MDBInput label='New password' size='lg' id='form2' type='password' required onChange= 
                                            {(e)=>setPassword(e.target.value)}/>
                                    </MDBCol>

                                </MDBRow>
                                <MDBRow className='align-items-center pt-4 pb-3'>
                                    <MDBCol md='3' className='ps-5'>
                                        <h6 className="mb-0">New password(again)</h6>
                                    </MDBCol>

                                    <MDBCol md='9' className='pe-5'>
                                        <MDBInput label='confirm password ' size='lg' id='form2' type='password' required onChange={(e)=>setConfirmation(e.target.value)}/>
                                    </MDBCol>
                                </MDBRow>
                                <MDBBtn className='my-4' size='lg' type='submit'onClick={submit} >Change Password</MDBBtn>
                        </MDBCardBody>
                        </MDBCard>        
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Changepass;