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
    MDBFile,
    MDBCardImage
} from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function UpdateProfile(){

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const token = localStorage.getItem('token');

    const submitt = (e)=>{
        e.preventDefault()
        if (!name.trim() || !job.trim()) {
            swal("Please fill out the name and job title fields.");
            return;
        }
        axios.patch(
            'https://civet-top-actively.ngrok-free.app/api/user/profile/update',
                    {
                        name: name,
                        job_title: job,
                        phone: phone,
                        city: city,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                            "ngrok-skip-browser-warning": "69420",
                        },
                    }
                )
                .then(() => {
                    // console.log(data.data.image)
                    // name:name
                    // setPhone(data.data.phone)
                    // setCity(data.data.city)
                    // setJob(data.data.job_title)
                    // setImg(data.data.image)
                    setJob("")
                    setName("")
            
                        window.location.href = '/profile';
                        swal("your profile has been updated!")
        
                })
                .catch((err) => console.log(err));
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
                                                    <MDBInput label='Your job title' size='lg' id='form1' type='text' required onChange={(e)=>setJob(e.target.value)}/>
                                                </MDBCol>

                                            </MDBRow>
                                            <MDBRow className='align-items-center pt-4 pb-3'>
                                                <MDBCol md='3' className='ps-5'>
                                                    <h6 className="mb-0">Edit City</h6>
                                                </MDBCol>
                                                <MDBCol md='9' className='pe-5'>
                                                    <MDBInput label='Your city' size='lg' id='form1' type='text' required onChange={(e)=>setCity(e.target.value)}/>
                                                </MDBCol>

                                            </MDBRow>
                                            <MDBRow className='align-items-center pt-4 pb-3'>
                                                <MDBCol md='3' className='ps-5'>
                                                    <h6 className="mb-0">Edit Phone</h6>
                                                </MDBCol>
                                                <MDBCol md='9' className='pe-5'>
                                                    <MDBInput label='Your phone' size='lg' id='form1' type='text' required onChange={(e)=>setPhone(e.target.value)}/>
                                                </MDBCol>

                                            </MDBRow>
                                           
                                                  
                                                    {/* <MDBFile size='lg' id='customFile' required onChange={(e)=>setImg(e.target.value)}  accept=".jpeg, .png, .jpg, .gif, .svg" /> */}
                                                      
                                               
                                            <MDBRow className='align-items-center pt-4 pb-3'>
                                                <MDBCol md='3' className='ps-5'>
                                                    <h6 className="mb-0">Edit name</h6>
                                                </MDBCol>
                                                <MDBCol md='9' className='pe-5'>
                                                    <MDBInput label='Your name' size='lg' id='form1' type='text' required onChange={(e)=>setName(e.target.value)}/>
                                                </MDBCol>

                                            </MDBRow>
                                                <MDBBtn className='my-4 submit-btn' size='lg' type='submit' onClick={submitt}>Update</MDBBtn>
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