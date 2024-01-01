import React, { useState } from 'react';
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
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logo from '../imgs/Logo.png';
import '../components/css-components/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



    function Nav() {
        const [showBasic, setShowBasic] = useState(false);

    return (
        <>
        <MDBNavbar sticky expand='lg' light bgColor='light' className='nav'>
            <MDBContainer fluid>
            <MDBNavbarBrand href='#'className='logo-word'><img src={logo} alt='logo' className='logo' />CareerHub</MDBNavbarBrand>
            <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowBasic(!showBasic)}
                >
                    <FontAwesomeIcon icon={faBars} style={{ color: '#5271FF', fontSize: '1.9rem' }} />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav className='justify-content-center  mb-2 mb-lg-0'>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Browse Jobs</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  pages
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavbarItem>
                    <MDBNavbarItem>
                <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Blogs
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavbarItem>

                </MDBNavbarNav>
                {/* <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
                <MDBBtn outline>Search</MDBBtn>
                </MDBInputGroup> */}
                <MDBContainer tag="form" fluid className='d-flex justify-content-end align-items-center'>
                    <MDBBtn outline color="info" className='me-2 btn-sign' type='button'>
                    <a href='#signin'>sign in</a></MDBBtn>
                    <MDBBtn outline color="info" className='me-2 btn-sign' type='button'><a href='#signup'>sign up</a>
                    </MDBBtn>
                </MDBContainer>
            </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        </>
    );
    }
export default Nav;