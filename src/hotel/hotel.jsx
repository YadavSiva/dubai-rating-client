
import { Link } from 'react-router-dom'
import res1 from '../assets/images/res2.jpg'
import { HeaderComponent } from '../header/header'
export function HotelComponent({ averageRating, totalReviews }) {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <br />
            <div className='row'>
                <div className='col-3'>
                    <div className="card" style={{ width: "18rem" }}>
                        <Link to="/review" style={{ textDecoration: 'none', color: 'black' }}>
                            <img src={res1} className="card-img-top" alt="..."></img>
                        </Link>
                        <div className="card-body">
                            <div style={{ display: 'flex' }}>
                                <h5 className="card-title">priya hotel &nbsp; &nbsp; &nbsp; &nbsp;

                                </h5>
                                {averageRating !== undefined && ( // Check if averageRating is not undefined
                                    <span style={{ marginLeft: 'auto' }}>
                                        <span style={{ fontSize: '13px', color: "white", backgroundColor: 'green', padding: '5px', borderRadius: '5px', marginRight: '10px' }}>
                                            {averageRating.toFixed(1)}/5
                                        </span>
                                    </span>
                                )}
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">2 BHK</h6>
                            <h6>Mrp :  1500rs</h6>
                            <p className="card-text">
                                Location:  hyderbad 50004</p>
                            <a href="#" className="card-link">book Now</a>
                            <a href="#" className="card-link">Contact</a>

                        </div>

                    </div>
                </div>
                <div className='col-3'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={res1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">srinivas hotel &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <span className='haleem_ratings'>4.5</span>
                            </h5>

                            <h6 className="card-subtitle mb-2 text-muted">2 BHK</h6>
                            <h6>Mrp : 3500rs</h6>
                            <p className="card-text">
                                Location:  Telangana 500003</p>
                            <a href="#" className="card-link">book Now</a>
                            <a href="#" className="card-link">Contact</a>

                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={res1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Hadab &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <span className='haleem_ratings'>4.5</span>
                            </h5>

                            <h6 className="card-subtitle mb-2 text-muted">kiran hotel</h6>
                            <h6>Mrp : 3000rs</h6>
                            <p className="card-text">
                                Location:  Telangana 500003</p>
                            <a href="#" className="card-link">book Now</a>
                            <a href="#" className="card-link">Contact</a>

                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={res1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Hadab &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <span className='haleem_ratings'>4.5</span>
                            </h5>

                            <h6 className="card-subtitle mb-2 text-muted">roy hotel</h6>
                            <h6>Mrp : 3500rs</h6>
                            <p className="card-text">
                                Location:  Telangana 500003</p>
                            <a href="#" className="card-link">book Now</a>
                            <a href="#" className="card-link">Contact</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}