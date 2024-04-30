import './popularitem.css';
import res from '../assets/images/res.jpg';
import tutorlogo from '../assets/images/tutor.jpg';
import hotel from '../assets/images/hotel.jpg';
import eventplanner from '../assets/images/event.jpg';
import Travels from '../assets/images/travel.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import { Link } from 'react-router-dom';

export function HomeCategories() {
    return (
        <div>
            <div>
                <h1 style={{ fontSize: "33px", textAlign: "center" }} className='mt-5'>Most Popular Categories</h1>
                   <Row>
                <div style={{ marginLeft: "150px" }}>
                    <div className='container'>

                        <div className='row ' style={{ width: "100%" }}>

                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  ' style={{ alignItems: "center" }}>
                                <Link to="/review" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img className="restaurant" src={res}></img>

                                    <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Restaurant</h6>
                                </Link>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  ' style={{ alignItems: "center" }}>
                                <img className="restaurant" src={Travels}></img>
                                <h6 style={{ marginLeft: "0px", fontFamily: " sans-serif" }}>Tour & Travels</h6>

                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <Link to="/hotel" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img className="restaurant" src={hotel}></img>
                                    <h6 style={{ marginLeft: "25px", fontFamily: " sans-serif" }}>Hotel</h6>
                                </Link>
                            </div>
                            {/* <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <img className="restaurant" src={contractor}></img>
                                <h6 style={{ marginLeft: "10px" ,fontFamily: " sans-serif"}}>Contarctor</h6>
                            </div> */}
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <img className="restaurant" src={tutorlogo}></img>
                                <h6 style={{ marginLeft: "25px", fontFamily: " sans-serif" }}>Tutors</h6>

                            </div>
                            <Col>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2'>
                                <img className="restaurant" src={eventplanner}></img>
                                <h6 style={{ marginLeft: "5px", fontFamily: " sans-serif" }}>EventPlanner</h6>
                            </div>
                            </Col>
                        </div>
                    </div>
                </div>
                
                {/* <div style={{ marginLeft: "150px" }}>
                    <div className='container'>

                        <div className='row ' style={{ width: "100%" }}>

                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  ' style={{ alignItems: "center" }}>
                                <img className="restaurant" src={Travels}></img>
                                <h6 style={{ marginLeft: "0px",fontFamily: " sans-serif" }}>Tour & Travels</h6>

                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <img className="restaurant" src={ca}></img>
                                
                                <h6 style={{ marginLeft: "10px",fontFamily: " sans-serif" }}>Accountant</h6>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <img className="restaurant" src={hospital}></img>
                                <h6 style={{ marginLeft: "15px",fontFamily: " sans-serif" }}>Hospitals</h6>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <img className="restaurant" src={gym}></img>
                                <h6 style={{ marginLeft: "30px",fontFamily: " sans-serif" }}>Gym</h6>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <img className="restaurant" src={jewellery}></img>
                                <h6 style={{ marginLeft: "15px",fontFamily: " sans-serif" }}>Jewellery</h6>

                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2'>
                                <img className="restaurant" src={service}></img>
                                <h6 style={{ marginLeft: "1px" ,fontFamily: " sans-serif"}}>ServiceCenter</h6>
                            </div>
                        </div>
                    </div>




                </div> */}
                </Row>
            </div>

        </div>


    )
}