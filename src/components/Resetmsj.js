import './css-components/reset.css'
import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
}
from 'mdb-react-ui-kit';
import {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import ReactCodeInput from 'react-code-input';
function Resetmsj() {
    const [PIN, setPIN] = useState("");
    const [Mail, setMail] = useState("");

    const navigate = useNavigate();
    const ans=PIN.toString();
    console.log(PIN);
    console.log(typeof(ans));
    const submit = (e)=>{
        e.preventDefault()
        axios.post('https://civet-top-actively.ngrok-free.app/api/verify/pin',{
            email:Mail,
            pin:PIN,
        })
        .then(()=>navigate("/changepass"))
            .catch(()=>swal("PIN is incorrect!"))
        }
    const props = {
        inputStyle: {
            fontFamily: 'monospace',
            margin: '4px',
            MozAppearance: 'textfield',
            width: '40px',
            borderRadius: '3px',
            fontSize: '14px',
            height: '26px',
            paddingLeft: '7px',
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid #5271FF'
        },
        inputStyleInvalid: {
            fontFamily: 'monospace',
            margin: '4px',
            MozAppearance: 'textfield',
            width: '40px',
            borderRadius: '3px',
            fontSize: '14px',
            height: '26px',
            paddingLeft: '7px',
            backgroundColor: 'black',
            color: 'red',
            border: '1px solid red'
        }
    }
        
    return (
        <MDBContainer fluid id='reset'>
            <MDBRow className='d-flex justify-content-center align-items-center'>
                <MDBCol lg='8' className='my-5'>
                    <h2 class="text-white mb-4">Password Reset</h2>
                    <form onSubmit={submit} >
                    <MDBCard>
                        <MDBCardBody className='px-4'>
                            <MDBRow className='align-items-center pt-4 pb-3'>
                                <p>We have sent you an e-mail, please write your email again and the PIN</p>
                                <MDBInput type='email' label='example@gmail.com'  wrapperClass='mb-4' required onChange={(e)=>setMail(e.target.value)}/>
                                <MDBInput type='text' label='PIN'  wrapperClass='mb-4' required onChange={(e)=>setPIN(e.target.value)}/>
                            </MDBRow>
                            <MDBBtn className='my-4 submit-btn' size='lg' type='submit' onClick={submit}>Submit 
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>      
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Resetmsj;