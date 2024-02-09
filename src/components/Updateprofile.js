import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBInput,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBFile
} from 'mdb-react-ui-kit';
import {useState} from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function UpdateProfile(){
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
    .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token); // Save token to localStorage
        console.log(token);
        navigate("/pinconfirm");
    })
    .catch(()=>swal("Email Already Exist"))
    if (password !== confirmation) {
        // Display an error message or handle the mismatch
        swal("Passwords do not match");
        return; // Prevent further execution of the registration process
    }
    }
    return(
        <div className="update">
            <section style={{ backgroundColor: '#eee' }}>
                <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBRow lg="4">
                            <form onSubmit={submitt}>
                                        <MDBCard>
                                            <MDBCardBody className='px-4'>
                                            <MDBRow className='align-items-center pt-4 pb-3'>
                                                <MDBCol md='3' className='ps-5'>
                                                    <h6 className="mb-0">Edit Job title</h6>
                                                </MDBCol>
                                                <MDBCol md='9' className='pe-5'>
                                                    <MDBInput label='Your title' size='lg' id='form1' type='text' required onChange={(e)=>setName(e.target.value)}/>
                                                </MDBCol>

                                            </MDBRow>
                                            <MDBRow className='align-items-center pt-4 pb-3'>
                                                <MDBCol md='3' className='ps-5'>
                                                    <h6 className="mb-0">Edit City</h6>
                                                </MDBCol>
                                                <MDBCol md='9' className='pe-5'>
                                                    <MDBInput label='Your city' size='lg' id='form1' type='text' required onChange={(e)=>setName(e.target.value)}/>
                                                </MDBCol>

                                            </MDBRow>
                                            <MDBRow className='align-items-center pt-4 pb-3'>
                                                <MDBCol md='3' className='ps-5'>
                                                    <h6 className="mb-0">Update Image</h6>
                                                </MDBCol>
                                                <MDBCol md='9' className='pe-5'>
                                                    <MDBFile size='lg' id='customFile' />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow className='align-items-center pt-4 pb-3'>
                                                <MDBCol md='3' className='ps-5'>
                                                    <h6 className="mb-0">Edit name</h6>
                                                </MDBCol>
                                                <MDBCol md='9' className='pe-5'>
                                                    <MDBInput label='Your name' size='lg' id='form1' type='text' required onChange={(e)=>setName(e.target.value)}/>
                                                </MDBCol>

                                            </MDBRow>
                                                <MDBBtn className='my-4 submit-btn' size='lg' type='submit'>Update</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>      
                            </form>
                        </MDBRow>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>

    )
}
export default UpdateProfile;