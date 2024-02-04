import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import './css-components/footer.css'

function Footer() {
    return (
        <MDBFooter className='footer text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
            <section className='mb-4'>
            <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#3b5998' }}
                href='#!'
                role='button'
            >
                <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
            <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#dd4b39' }}
                href='#!'
                role='button'
            >
                <MDBIcon fab icon='google' />
            </MDBBtn>
            <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#0082ca' }}
                href='#!'
                role='button'
            >
                <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#333333' }}
                href='#!'
                role='button'
            >
                <MDBIcon fab icon='github' />
            </MDBBtn>
            </section>
        </MDBContainer>

        <div className='text-center p-3 ' style={{ backgroundColor: '#5271FF' }}>
            © 2024 Copyright: <span>Mawadah Elmashad & Islam Walied</span>
        </div>
        </MDBFooter>
    );
}
export default Footer;