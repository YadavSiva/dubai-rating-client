import './carousalcomponent.css';

// import image1 from '../assets/images/slide3.jpg';
// import image2 from '../assets/images/slide4.jpg';

import image5 from '../assets/images/slide1.jpg';



export function HomeSliderComponent() {
    return (
        
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> */}
                {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button> */}
            </div>
            <div className="carousel-inner">
                {/* <div className="carousel-item active">
                    <img src={image1} className="d-block  image  " alt="..." />
               </div> */}
                {/* <div className="carousel-item">
                    <img src={image2} className="d-block image" alt="..." />
              </div> */}
               
               <div className="carousel-item">
                    <img src={image5} className="d-block image" alt="..." />
               </div>
              

            </div>
            
        </div>
    )
}