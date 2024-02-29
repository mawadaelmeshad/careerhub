/* eslint-disable no-lone-blocks */
import React, { useState , useEffect } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logo from '../imgs/Logo.png';
import '../components/css-components/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link, Navigate } from "react-router-dom";
import 'react-bootstrap';
import axios from 'axios';
import { faCircleUser,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

    function Nav() {
        const [isLoggedIn, setIsLoggedIn] = useState(false); 
        const checkLoginStatus = () => {
            // Check if user is logged in based on the presence of token in local storage
            if (window.localStorage.getItem('token')) {
              setIsLoggedIn(true);
            } else {
              setIsLoggedIn(false);
            }
          };
          const handleLogoutConfirmation = () => {
          Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5271FF',
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
              handleLogout();
            }
          });
        };
          const handleLogout = () => {
            axios.get("https://civet-top-actively.ngrok-free.app/api/logout")
            .then(() => {
              // After successful logout, clear token from local storage and update login state
              localStorage.removeItem('token');
              setIsLoggedIn(false);
              window.location.href = '/signin';
            });
            
          };
          useEffect(() => {
            checkLoginStatus();
          }, [isLoggedIn]);
        const [openBasic, setOpenBasic] = useState(false);
    return (
        <>
        <MDBNavbar sticky expand='lg' light bgColor='light' className='nav'>
            <MDBContainer fluid>
            <MDBNavbarBrand className='logo-word'><img src={logo} alt='logo' className='logo' /><Link to='./home'>CareerHub</Link></MDBNavbarBrand>
            <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenBasic(!openBasic)}
            >
            <MDBIcon icon='bars' fas className='menu-icon'/>
        </MDBNavbarToggler>
                <MDBCollapse navbar open={openBasic}>
                <MDBNavbarNav className='justify-content-center  mb-2 mb-lg-0'>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page'><Link to='/home'>Home</Link>
                
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink href='/browse'>Browse Jobs</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
                </MDBNavbarItem>
                </MDBNavbarNav>
                <MDBContainer tag="form" fluid className='d-flex justify-content-center justify-content-lg-end'>
                {isLoggedIn ? (
        <>
        <Link to="/profile"><FontAwesomeIcon icon={faCircleUser} className='user-icon'/></Link>
        <FontAwesomeIcon icon={faRightFromBracket} className='user-icon' onClick={handleLogoutConfirmation}/>
        {/* <MDBBtn outline color="info" className='me-2 btn-sign' type='button' id='sign' onClick={handleLogout}>Sign out</MDBBtn> */}
        </>
      ) : (
        <>
        <Link to='/signup'><MDBBtn outline color="info" className='me-2 btn-sign' type='button'>Sign up</MDBBtn></Link>
        <Link to='/signin'><MDBBtn outline color="info" className='me-2 btn-sign' type='button' id='sign'>Sign in</MDBBtn></Link>
        </>
      )}
                
                </MDBContainer>
            </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        </>
    );
    }
export default Nav;