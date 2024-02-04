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
import { Link } from "react-router-dom";

    function Nav() {
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
                {/* <MDBNavbarItem>
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
                </MDBNavbarItem> */}
                    {/* <MDBNavbarItem>
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
                </MDBNavbarItem> */}

                </MDBNavbarNav>
                <MDBContainer tag="form" fluid className='d-flex justify-content-end align-items-center'>
                    <Link to={'/signin'}><MDBBtn outline color="info" className='me-2 btn-sign' type='button'>Sign in</MDBBtn></Link>
                    <Link to={'/signup'}><MDBBtn outline color="info" className='me-2 btn-sign' type='button'>Sign up</MDBBtn></Link>
                </MDBContainer>
            </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        </>
    );
    }
export default Nav;