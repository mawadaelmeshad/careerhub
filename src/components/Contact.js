import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import './css-components/contact.css';
import {useState} from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
function Contact() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("");
  const [msj, setMsj] = useState("");
  const navigate = useNavigate();
  const submitt = (e) => {
    e.preventDefault();
    axios.post('https://civet-top-actively.ngrok-free.app/api/auth/contact', {
      email: mail,
      description: msj
    })
      .then(() => {
        navigate("/home");
        swal("We have received your message and we will contact you soon");
      })
      // .catch(() => {
      //   swal("Email Already Exist");
      // });
  };
  
  return (
    <div className='contact'>
      <h2>Contact us</h2>
      <form id='form' className='text-center centered-form' style={{ width: '100%', maxWidth: '500px' }} onSubmit={submitt}>
          {/* <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required onChange={(e)=>setName(e.target.value)}/> */}

          <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required onChange={(e)=>setMail(e.target.value)}/>

          {/* <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required onChange={(e)=>setSubject(e.target.value)} /> */}
          <MDBInput type='text' label='description'  wrapperClass='mb-4' required onChange={(e)=>setMsj(e.target.value)}/>
          {/* <MDBTextArea wrapperClass='mb-4' label='Message'  required onChange={(e)=>setMsj(e.target.value)}/> */}

          {/* <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' /> */}

          <MDBBtn color='primary' block className='my-4' type='submit'>
            Send
          </MDBBtn>
      </form>
    </div>
  );
}
export default  Contact;