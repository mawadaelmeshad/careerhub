import Card from 'react-bootstrap/Card';
import './css-components/browse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faChartSimple, faTabletButton } from '@fortawesome/free-solid-svg-icons';
import browse from '../imgs/browse.jpeg';

function Browse(){
    return(
        <div className="browse">
            <h2 class="text-white mb-4">Popular Jobs</h2>
            <div className='container'>
            <div className='contain-cards'>
                <Card style={{ width: '18rem' }} className="wow bounceInUp">
                    <Card.Body>
                        <Card.Title className='card-title'>Frontend developer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted icons"><FontAwesomeIcon icon={faLocationDot} className='icons' /> Mansoura</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted icons"><FontAwesomeIcon icon={faChartSimple} className='icons'/> Senior</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faTabletButton} className='icons'/> Development</Card.Subtitle>
                        <Card.Link href="#" className='apply-btn'>Apply Now</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='card-title'>Backend developer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faLocationDot} className='icons' /> Remote</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faChartSimple} className='icons' /> Junior</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faTabletButton} className='icons' /> Development</Card.Subtitle>
                        <Card.Link href="#">Apply Now</Card.Link>
                    </Card.Body>
                </Card>
                
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='card-title'>Content Writer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faLocationDot} className='icons' /> Cairo</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faChartSimple} className='icons' /> Senior</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faTabletButton} className='icons' /> Writing</Card.Subtitle>
                        <Card.Link href="#">Apply Now</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='card-title'>Frontend developer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faLocationDot} className='icons' /> Mansoura</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faChartSimple} className='icons' /> Senior</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faTabletButton} className='icons' /> Development</Card.Subtitle>
                        <Card.Link href="#">Apply Now</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='card-title'>Frontend developer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faLocationDot} className='icons' /> Mansoura</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faChartSimple} className='icons' /> Senior</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faTabletButton} className='icons' /> Development</Card.Subtitle>
                        <Card.Link href="#">Apply Now</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='card-title'>Frontend developer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faLocationDot} className='icons' /> Mansoura</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faChartSimple} className='icons' /> Senior</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faTabletButton} className='icons' /> Development</Card.Subtitle>
                        <Card.Link href="#">Apply Now</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='card-title'>Frontend developer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faLocationDot} className='icons' /> Mansoura</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faChartSimple} className='icons' /> Senior</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faTabletButton} className='icons' /> Development</Card.Subtitle>
                        <Card.Link href="#">Apply Now</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='card-title'>Frontend developer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faLocationDot} className='icons' /> Mansoura</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faChartSimple} className='icons' /> Senior</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><FontAwesomeIcon icon={faTabletButton} className='icons' /> Development</Card.Subtitle>
                        <Card.Link href="#">Apply Now</Card.Link>
                    </Card.Body>
                </Card>

            </div>
            </div>
        </div>

    );

}
export default Browse;