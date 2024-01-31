import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers , faAddressBook , faGlobe } from '@fortawesome/free-solid-svg-icons';
import './css-components/services.css';
function Services(){

    return(
        <div className="services">
            <div className="container contain-services">
                <div className="card">
                <FontAwesomeIcon icon={faUsers} className='icon-services' />
                <h3>Job Listing Services</h3>
                <p>Allow companies to post job openings on our platform. Offer different listing packages with varying features.</p>
                </div>

                <div className="card">
                <FontAwesomeIcon icon={faAddressBook} className='icon-services' />
                <h3>Recruitment Services</h3>
                <p>Offer recruitment assistance to companies by helping them with the entire hiring process.</p>
                </div>

                <div className="card">
                <FontAwesomeIcon icon={faGlobe} className='icon-services'/>
                <h3>Networking Events</h3>
                <p> Organize networking events, job fairs, or webinars where employers, recruiters, and job seekers can connect.</p>
                </div>
            </div>

        </div>

    );

}
export default Services;