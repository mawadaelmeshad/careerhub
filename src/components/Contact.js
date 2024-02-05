import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import './css-components/contact.css';

function Contact() {
  return (
    <div className='contact'>
    <h2>Contact us</h2>
    <form id='form' className='text-center centered-form' style={{ width: '100%', maxWidth: '500px' }}>
        <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

        <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

        <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

        <MDBTextArea wrapperClass='mb-4' label='Message' />

        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

        <MDBBtn color='primary' block className='my-4'>
          Send
        </MDBBtn>
    </form>
    </div>
  );
}
export default  Contact;