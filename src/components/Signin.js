import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './css-components/signin.css';
import {useState} from 'react'
import axios from "axios"
import { useNavigate , Link  } from "react-router-dom";
import swal from 'sweetalert';
function Signin() {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' }).slice(0, 3);
  console.log(month)
  const google = ()=>{
    window.open('https://civet-top-actively.ngrok-free.app/api/auth/google/redirect',"_blank","width=400,height = 400,left=500,top=500")
    
  }
  const github = ()=>{
    window.open('https://civet-top-actively.ngrok-free.app/api/auth/github/redirect',"_blank","width=400,height = 400,left=500,top=500")
    
  }
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const submit = (e)=>{
        e.preventDefault()
        axios.post('https://civet-top-actively.ngrok-free.app/api/login',{ 
            email:mail,
            password,
        })
        .then(result =>{
          console.log(result.data.data)
          window.location.href = '/home';
          localStorage.setItem('token', result.data.data.token)
        })
            .catch(()=>swal("Sorry , email or password is incorrect!"))
        }
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom" id='#signin'>
        <MDBRow>
            <MDBCol col='10' md='6' sm='8' className='align-items-center justify-content-center'>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid text-center mx-auto img-login" alt="Sample image" />
            </MDBCol>
            <MDBCol col='4' md='6'>
              <div className="d-flex flex-row align-items-center justify-content-center">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <MDBBtn floating size='md' tag='a' className='me-2' style={{ color: 'white' }} onClick={()=>github()} >
                  <MDBIcon fab icon='github' />
                  </MDBBtn>
                  <MDBBtn floating size='md' tag='a'  className='me-2' style={{ color: 'white' }} onClick={()=>google()}>
                  <MDBIcon fab icon='google' />
                  </MDBBtn>
              </div>
              <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <form onSubmit={submit}>
                  <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" required onChange={(e)=>setMail(e.target.value)}/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" required onChange={(e)=>setPassword(e.target.value)}/>

                  <div className="d-flex justify-content-between mb-4">
                     <Link to='/reset'> <p>Forgot password?</p></Link>
                  </div>

                  <div className='text-center text-md-start mt-4 pt-2'>
                      <MDBBtn className="mb-0 px-5 submit-btn" size='lg' type='submit'>Login</MDBBtn>
                      <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to={'/signup'}  className="link-danger">Sign up</Link></p>
                      
                  </div>
              </form>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}

export default Signin;