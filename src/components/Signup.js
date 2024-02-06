import './css-components/signup.css'
import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFile
}
from 'mdb-react-ui-kit';
import {useState} from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function Signup() {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const navigate = useNavigate();
    const submitt = (e)=>{
    e.preventDefault()
    axios.post('https://civet-top-actively.ngrok-free.app/api/register',{
                    name,
                    email : mail,
                    password,
                    password_confirmation: confirmation,
                    "ngrok-skip-browser-warning": "69420",
    })
    .then(()=>navigate("/pinconfirm"))
    .catch(()=>swal("Email Already Exist"))
    if (password !== confirmation) {
        // Display an error message or handle the mismatch
        swal("Passwords do not match");
        return; // Prevent further execution of the registration process
    }
}
    return (
        <MDBContainer fluid id='signup'>
            <MDBRow className='d-flex justify-content-center align-items-center'>
                <MDBCol lg='8' className='my-5'>
                    <h2 class="text-white mb-4">Sign up</h2>
                    <form onSubmit={submitt}>
                        <MDBCard>
                            <MDBCardBody className='px-4'>
                            <MDBRow className='align-items-center pt-4 pb-3'>
                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Name</h6>
                                </MDBCol>
                                <MDBCol md='9' className='pe-5'>
                                    <MDBInput label='Your name' size='lg' id='form1' type='text' required onChange={(e)=>setName(e.target.value)}/>
                                </MDBCol>

                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>
                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Email address</h6>
                                </MDBCol>
                                <MDBCol md='9' className='pe-5'>
                                    <MDBInput label='example@example.com' size='lg' id='form2' type='email' required onChange={(e)=>setMail(e.target.value)}/>
                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>
                                <MDBCol md='3' className='ps-5'>
                                <h6 className="mb-0">Password</h6>
                                </MDBCol>
                                <MDBCol md='9' className='pe-5'>
                                <MDBInput label='Password' size='lg' id='form2' type='password' required onChange={(e)=>setPassword(e.target.value)}/>
                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                            <MDBRow className='align-items-center pt-4 pb-3'>
                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Confirm Password</h6>
                                </MDBCol>
                                <MDBCol md='9' className='pe-5'>
                                    <MDBInput label='Confirm Password' size='lg' id='form2' type='password' required onChange={(e)=>setConfirmation(e.target.value)}/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='align-items-center pt-4 pb-3'>
                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Upload CV</h6>
                                </MDBCol>
                                <MDBCol md='9' className='pe-5'>
                                    <MDBFile size='lg' id='customFile' required />
                                    <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file size 50 MB
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <hr className="mx-n3" />
                                <MDBBtn className='my-4 submit-btn' size='lg' type='submit'>Register</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>      
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Signup;