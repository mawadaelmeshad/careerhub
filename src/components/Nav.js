import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBIcon,
    MDBNavbarNav,
    MDBInputGroup,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem

} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logo from '../imgs/Logo.png';
import '../components/css-components/nav.css';


    function Nav() {
    const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);

    return (
        <>
        <MDBNavbar sticky expand='lg' light bgColor='light' className='nav'>
            <MDBContainer fluid>
            <MDBNavbarBrand href='#'className='logo-word'><img src={logo} alt='logo' className='logo' />CareerHub</MDBNavbarBrand>
            <MDBNavbarToggler
                type='button'
                data-target='#navbarTogglerDemo02'
                aria-controls='navbarTogglerDemo02'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
            >
                <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar open={openNavNoTogglerSecond}>
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
                    <MDBBtn outline color="info" className='me-2 btn-sign' type='button'>Sign in
                    </MDBBtn>
                    <MDBBtn outline color="info" className='me-2 btn-sign' type='button'>Sign up
                    </MDBBtn>
                </MDBContainer>
            </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        </>
    );
    }
export default Nav;