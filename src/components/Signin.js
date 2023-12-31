import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './css-components/signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';



function Signin() {
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
    <MDBContainer fluid className="p-3 my-5 h-custom" id='signin'>

        <MDBRow>

            <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" className='img-login'/>
            </MDBCol>

            <MDBCol col='4' md='6'>

            <div className="d-flex flex-row align-items-center justify-content-center">

                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                <MDBBtn floating size='md' tag='a' className='me-2' style={{ color: 'white' }}>
                <MDBIcon fab icon='facebook' />
                </MDBBtn>
                <MDBBtn floating size='md' tag='a'  className='me-2' style={{ color: 'white' }}>
                <MDBIcon fab icon='google' />
                </MDBBtn>


            </div>

            <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            <form onSubmit={submit}>
                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>setMail(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>setPassword(e.target.value)}/>

                <div className="d-flex justify-content-between mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                </div>

                <div className='text-center text-md-start mt-4 pt-2'>
                    <MDBBtn className="mb-0 px-5" size='lg' type='submit'>Login</MDBBtn>
                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Sign up</a></p>
                    
                </div>
            </form>
  
            </MDBCol>
        </MDBRow>

{/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div> */}

    </MDBContainer>
  );
}

export default Signin;