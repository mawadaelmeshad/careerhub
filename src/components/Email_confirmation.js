import "./css-components/about.css";
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
}
from 'mdb-react-ui-kit';
import './css-components/confirm.css';

function Email_confirmation(){
    return(
        <div className="email_confirmation">
            <p className="p_confirm">To complete the process, kindly click the designated button below to initiate the sending of a confirmation email... </p>
            <MDBBtn className='my-4' size='lg'>Send confirmation mail</MDBBtn>
        </div>
    );
}
export default Email_confirmation;