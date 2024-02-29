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
}from 'mdb-react-ui-kit';
import {useState} from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import './css-components/confirm.css';

function Email_confirmation(){
    const [mail, setMail] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    const submitt = (e)=>{
    e.preventDefault()
    axios.post('https://civet-top-actively.ngrok-free.app/api/email/verify',{
        headers: {
            Authorization: `Bearer ${token}`
        },
                    email : mail,
    })
    .then(()=>navigate("/pinconfirm"))
    .catch(()=>swal("Email is incorrect!"))
}
    return (
        <div className="email-confirmation">
        <MDBContainer fluid className='email-confirmation'>
            <MDBRow className='d-flex justify-content-center align-items-center'>
                <MDBCol lg='8' className='my-5'>
                    <form onSubmit={submitt}>
                        <MDBCard>
                            <MDBCardBody className='px-4'>
                            <MDBRow className='align-items-center pt-4 pb-3'>
                            <p className="p_confirm">To complete the process, kindly click the designated button below to initiate the sending of a confirmation email... </p>
                                <MDBCol md='3' className='ps-5'>
                                    <h6 className="mb-0">Email address</h6>
                                </MDBCol>
                                <MDBCol md='9' className='pe-5'>
                                    <MDBInput label='example@example.com' size='lg' id='form2' type='email' required onChange={(e)=>setMail(e.target.value)}/>
                                </MDBCol>
                            </MDBRow>
                                <MDBBtn className='my-4 submit-btn' size='lg' type='submit'>Send PIN</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>      
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
    );
}
  
export default Email_confirmation;