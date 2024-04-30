import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from 'react-rating-stars-component';
import res from '../assets/images/res3.jpg';
import { Star } from 'react-bootstrap-icons';
import './screen.css';
import { Card, CardBody, CardImg, Col, Row } from 'react-bootstrap';
import { HeaderComponent } from '../header/header';

const ReviewForm = ({ }) => {

  const [data, setdata] = useState([])
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editedRating, setEditedRating] = useState('');
  const [editedComment, setEditedComment] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [error, setError] = useState('');
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  useEffect(() => {
    fetchReviews();
    fetchAverageRating();
  }, []);


  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/review');
      setdata(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortData = () => {
    if (sortBy === 'rating') {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setSortedData(sorted);
    } else if (sortBy === 'review') {
      const sorted = [...data].sort((a, b) => b.review - a.review);
      setSortedData(sorted);
    }
  };
  const handleReviewSubmit = async () => {
    if (rating === 0) {
      setError('Please select a rating.');
      return;
    }

    if (comment.trim() === '') {
      setError('Please add a comment.');
      return;
    }
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post('http://localhost:3001/api/reviews', { rating, comment }, config)
        .then((res) => {
          setdata([...data, res.data])
        })

      // Optionally, update the UI with the new review
      setRating(0);
      setComment('');
      setError('')
      alert("review saved")
    } catch (error) {
      console.error('Error submitting review:', error.message);
    }
  };
  const deleteReview = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:3001/api/review/${id}`, config);
      setdata(data.filter((review) => review._id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };
  const handleEdit = (id, rating, comment) => {
    setEditMode(id);
    setEditedRating(rating);
    setEditedComment(comment);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditedRating('');
    setEditedComment('');
  };

  const handleSaveEdit = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.put(`http://localhost:3001/api/review/${id}`, { rating: editedRating, comment: editedComment }, config);
      const updatedReviews = data.map(review =>
        review._id === id ? { ...review, rating: editedRating, comment: editedComment } : review
      );
      setdata(updatedReviews);
      setEditMode(null);
      setEditedRating('');
      setEditedComment('');

    } catch (error) {
      console.error('Error updating review:', error);
    }
  };
  const handleReport = async (id) => {
    try {
      const reason = prompt('Enter reason for reporting:');
      if (reason) {
        await axios.post(`http://localhost:3001/api/review/report/${id}`, { reason });
        // Assuming you want to remove the reported review from the frontend
        setdata(data.filter((review) => review._id !== id));
        alert('Review reported successfully');
      }
    } catch (error) {
      console.error('Error reporting review:', error);
    }
  };
  const fetchAverageRating = async () => {
    try {
      const response = await axios.get('http://localhost:3001/get-average-rating', {

      });
      setAverageRating(response.data.averageRating);
      setTotalReviews(response.data.totalReviews);
    } catch (error) {
      console.error('Error fetching average rating:', error);
    }
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredReviews = data.filter((review) =>
      review.comment.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredReviews);
  };
 
  return (

    <div className='review '>
      <HeaderComponent></HeaderComponent>
      <div class="body-container">
      <img src={res} className='children1'></img>
            <div className='children_main_container '>
                <div style={{ display: 'flex' }}>
<h4 style={{ marginLeft: '2px', marginTop: '0px', marginBottom: '2px', fontSize:'35px'  }}>Family Food center </h4>
{averageRating !== null && ( // Conditionally render only if averageRating is not null
  <span style={{ marginLeft: '520px' }}>
    <span style={{ fontSize: '13px', color: "white", backgroundColor: 'green', padding: '5px', borderRadius: '5px', marginRight: '7px' }}>
      {averageRating.toFixed(1)}/5
    </span>

  </span>
)}
</div>
                <h6 style={{ color: 'GrayText' }}>Banjara Hills, Hyderabad - Best hotel</h6>
                <h6 style={{ color: 'GrayText' }}> Road No. 2, beside park Hyatt, Sri Nagar Colony, Kamalapuri Colony, Banjara Hills, Hyderabad, Telangana 500034</h6>
                <h6 className='hospital_timings'>Opens at 24 hours</h6>
</div>
</div>
      <br />
      <div className='rating'>
                        <div style={{ color: 'red' }}>{error}</div>
                        <label style={{color:'black',fontWeight:'bold'}}>Start your Rating</label>
                        <br /><br />
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                style={{
                                    color: star <= rating ? 'green' : 'gray',
                                    cursor: 'pointer',

                                }}
                                onClick={() => setRating(star)}
                            >
                                <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '40px' }} /></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                            </span>
                        ))}
                        <br />
                        <br />
                        <textarea
                            placeholder="Add Comment...."
                            value={comment}
                            className='form-control'
                            onChange={(e) => setComment(e.target.value)}
                            style={{ marginTop: '0px',width:'340px',marginLeft:'450px',border:'1px solid' }}
                        ></textarea>
                        <br />
                        <button style={{ color: 'white', backgroundColor: "green", borderRadius:'7px',padding:'5px' }} onClick={handleReviewSubmit}>
                            Submit Review
                        </button>
                    </div>
        <hr ></hr>  
    
      <div style={{ display: 'flex' }}>

        <div style={{ marginLeft: '70px' }}>
          <h2 style={{ fontVariant: 'small-caps', fontSize: '25px' }}> Reviews & Rating</h2>
          {averageRating !== null && ( // Conditionally render only if averageRating is not null
            <span style={{ marginLeft: 'auto', }}>
              <span style={{ fontSize: '20px', color: "white", backgroundColor: 'green', padding: '9px', borderRadius: '7px', marginLeft: 'auto' }}>
                {averageRating.toFixed(1)}
              </span>
              <span> &nbsp;
                <span style={{ position: 'absolute', top: 930, fontSize: '16px', color: 'black' }}><strong>{totalReviews} Ratings</strong>   </span>

                <span style={{ position: 'absolute', top: 950, fontVariant: 'common-ligatures' }}>We all need people who will give us rating</span>
              </span>
            </span>
          )}
          <br />
          <div style={{marginLeft:'0px'}}>
          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {data.map(review => (
                <div key={review._id}>

                  {editMode === review._id ? (
                    <>
                      <br />
                      <input type="number" value={editedRating} onChange={(e) => setEditedRating(e.target.value)} /><br></br>
                      <textarea value={editedComment} onChange={(e) => setEditedComment(e.target.value)} />
                      <br></br>
                      <button onClick={() => handleSaveEdit(review._id)}>Save</button>

                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <br />
                      <p className="person-icon">{`${review.userName}`}</p>
                      <p>{`Rating: ${review.rating}`}</p>
                      <p>{`Comment: ${review.comment}`}</p>
                      <button onClick={() => deleteReview(review._id)} style={{ color: 'white',
    backgroundColor: '#d94545',
    border: 'none',
    borderRadius: '10px',
    padding: '3px 10px',
    cursor: 'pointer',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease' }} >Delete</button>&nbsp;
                      <button onClick={() => handleEdit(review._id, review.rating, review.comment)} style={{ color: 'white',
    backgroundColor: '#4a9f4a',
    border: 'none',
    borderRadius: '10px',
    padding: '3px 10px',
    cursor: 'pointer',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease'  }}>Edit</button>&nbsp;
                      <button onClick={() => handleReport(review._id)} style={{ color: 'white',
    backgroundColor: '#d94545',
    border: 'none',
    borderRadius: '10px',
    padding: '3px 10px',
    cursor: 'pointer',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease'  }}>Report</button>
                    </>
                  )}
                </div>
              ))}

            </ul>
          )}
          </div>
        </div>
        
        
        {/* <div style={{ marginLeft: '100px' }} >
             <div >
          <span>
            <label>
              
              <select value={sortBy} onChange={handleSortChange} style={{marginTop:'0px'}}>
                <option value="">None</option>
                <option value="rating">Sort By Rating</option>
                <option value="review">Review</option>
              </select>
            </label>
            </span>
          <span style={{marginLeft:'20px'}}>
            <button onClick={sortData} style={{borderRadius:'6px',border:'1px solid'}}>Sort</button>
            </span>
          </div>
          {sortedData.length > 0 && (
            <ul>
              {sortedData.map((item, index) => (
                <li key={index}>
                  <p>Rating: {item.rating}, Review: {item.comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div> */}
        <div style={{ marginLeft: '650px' }}>
          
          <input
            type='text'
            placeholder='Search reviews...'
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {searchQuery && (
            <ul>
              {filteredData.map((review) => (
                <li key={review._id}>
                  <p>{`Rating: ${review.rating}, Comment: ${review.comment}`}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {/* <div>
     
      <ServiceComponent averageRating={averageRating} totalReviews={totalReviews} />
    </div> */}

    </div>
  );
};

export default ReviewForm;
