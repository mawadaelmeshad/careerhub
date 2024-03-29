import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState('');
  const [img, setImg] = useState(null);
  const [city, setCity] = useState('');

  const token = localStorage.getItem('token');


  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch profile data from API
    fetch('https://civet-top-actively.ngrok-free.app/api/user/profile', {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    })

    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
        setName(data.user.name)
        setPhone(data.user.phone)
        setCity(data.user.city)
        setJob(data.user.job_title)
        setImg(data.user.image)



    })
    .catch((err) => console.log(err));
},[token])
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="12">
            <MDBCard className="mb-8">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={`https://civet-top-actively.ngrok-free.app/storage/${img}`}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{job}</p>
                <p className="text-muted mb-4">{city}</p>
                <div className="d-flex justify-content-center mb-2">
                </div>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
          <MDBCol lg="12">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{phone}</MDBCardText>
                  </MDBCol>
                </MDBRow> 
              </MDBCardBody>
            </MDBCard>
            <Link to='/updateprofile'><MDBBtn>Edit</MDBBtn></Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default Profile;