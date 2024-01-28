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
    MDBTextArea,
    MDBFile
}
from 'mdb-react-ui-kit';
import {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
function Resetmsj() {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const navigate = useNavigate();
    return (
        <MDBContainer fluid id='reset'>

        <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol lg='8' className='my-5'>

            <h2 class="text-white mb-4">Password Reset</h2>
            <form>
            <MDBCard>
                <MDBCardBody className='px-4'>
            

                <MDBRow className='align-items-center pt-4 pb-3'>
                    <p>We have sent you an e-mail. Please contact us if you do not receive it within a few minutes</p>

</MDBRow>

                </MDBCardBody>
            </MDBCard>

                        
            </form>
            </MDBCol>
        </MDBRow>

        </MDBContainer>
    );
}

export default Resetmsj;