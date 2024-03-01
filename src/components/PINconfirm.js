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
import ReactCodeInput from 'react-code-input';
function PINconfirm() {
    const [PIN, setPIN] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const ans = PIN.toString();
    console.log(ans);
    console.log(typeof(ans));
    console.log(token);
    const submit = (e)=>{
        e.preventDefault()
        axios.post( 'https://civet-top-actively.ngrok-free.app/api/email/verify',
        {
            pin: PIN,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )
        .then(() => {
            navigate("/home");
            swal("Thank you for confirming your mail");
            })
            .catch(() => {
                swal("PIN is incorrect!");
            });
            };
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
                    <h2 class="text-white mb-4">Email Confirmation</h2>
                    <form onSubmit={submit} >
                    <MDBCard>
                        <MDBCardBody className='px-4'>
                            <MDBRow className='align-items-center pt-4 pb-3'>
                                <p>We have sent you an e-mail, please write the PIN</p>
                                {/* <ReactCodeInput type='number'
                            fields={6} {...props} required  onChange={(value) => setPIN(value)}/> */}
                            <MDBInput type='text' label='PIN'  wrapperClass='mb-4' required onChange={(e)=>setPIN(e.target.value)}/>
                            </MDBRow>
                            <MDBBtn className='my-4 submit-btn' size='lg' type='submit'>Submit
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>      
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default PINconfirm;