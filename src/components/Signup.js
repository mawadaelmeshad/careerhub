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
    MDBTextArea,
    MDBFile
}
from 'mdb-react-ui-kit';
import {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function Signup() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    


    const submit = (e)=>{
        e.preventDefault()
        axios.post('https://civet-top-actively.ngrok-free.app/api/login',{
            
            email:mail,
            password,
        })
        .then(res =>
            {  
                if(res.data.is_admin === "0"){
                    navigate("/")
                    
                }else if(res.data.is_admin === "1"){
                    window.location.href = `http://localhost:3000?${res.data.token}`;
                }
            })
            .catch(()=>swal("Email Or Password Is Incorrect"))
        }
    return (
        <MDBContainer fluid id='signup'>

        <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol lg='8' className='my-5'>

            <h2 class="text-white mb-4">Sign up</h2>
            <form onSubmit={submit}>
            <MDBCard>
                <MDBCardBody className='px-4'>

                <MDBRow className='align-items-center pt-4 pb-3'>

                    <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Name</h6>
                    </MDBCol>

                    <MDBCol md='9' className='pe-5'>
                    <MDBInput label='Your name' size='lg' id='form1' type='text'/>
                    </MDBCol>

                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className='align-items-center pt-4 pb-3'>

                    <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Email address</h6>
                    </MDBCol>

                    <MDBCol md='9' className='pe-5'>
                    <MDBInput label='example@example.com' size='lg' id='form2' type='email'/>
                    </MDBCol>

                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className='align-items-center pt-4 pb-3'>

<MDBCol md='3' className='ps-5'>
<h6 className="mb-0">Password</h6>
</MDBCol>

<MDBCol md='9' className='pe-5'>
<MDBInput label='Password' size='lg' id='form2' type='password'/>
</MDBCol>

                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className='align-items-center pt-4 pb-3'>

<MDBCol md='3' className='ps-5'>
<h6 className="mb-0">Confirm Password</h6>
</MDBCol>

<MDBCol md='9' className='pe-5'>
<MDBInput label='Confirm Password' size='lg' id='form2' type='password'/>
</MDBCol>

                </MDBRow>


                <MDBRow className='align-items-center pt-4 pb-3'>

                    <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Upload CV</h6>
                    </MDBCol>

                    <MDBCol md='9' className='pe-5'>
                    <MDBFile size='lg' id='customFile' />
                    <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file size 50 MB</div>
                    </MDBCol>

                </MDBRow>

                <hr className="mx-n3" />

                <MDBBtn className='my-4' size='lg'>Register</MDBBtn>

                </MDBCardBody>
            </MDBCard>

                        
            </form>

           
            </MDBCol>
        </MDBRow>

        </MDBContainer>
    );
}

export default Signup;