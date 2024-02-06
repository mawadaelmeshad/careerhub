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
function Reset() {
    const [mail, setMail] = useState("");
    const navigate = useNavigate();
    const submit = (e)=>{
        e.preventDefault()
        axios.post('https://civet-top-actively.ngrok-free.app/api/forgot-password',{
            
            email:mail,
        })
        .then(()=>navigate("/resetmsj"))
            .catch(()=>swal("Sorry , email is incorrect!"))
        }
        
    return (
        <MDBContainer fluid id='reset'>
            <MDBRow className='d-flex justify-content-center align-items-center'>
                <MDBCol lg='8' className='my-5'>
                <h2 class="text-white mb-4">Reset Password</h2>
                <form onSubmit={submit}>
                <MDBCard>
                    <MDBCardBody className='px-4'>
                        <MDBRow className='align-items-center pt-4 pb-3'>
                            <MDBCol md='3' className='ps-5'>
                            <h6 className="mb-0">Email address</h6>
                            </MDBCol>
                            <MDBCol md='9' className='pe-5'>
                            <MDBInput label='example@example.com' size='lg' id='form2' type='email' required onChange={(e)=>setMail(e.target.value)}/>
                            </MDBCol>
                        </MDBRow>
                        <MDBBtn className='my-4' size='lg' type='submit' >Send pin
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>          
                </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Reset;