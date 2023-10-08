import React from 'react';

const About = () => {
    return (
        <div>
            <div className='text-center'>

            <h1 className='mt-8 mb-8 text-2xl'>Unveiling the Magic</h1>
            <p className=' text-base text-gray-400 mb-20 '>Welcome to our Event Planner Gallery,<br></br> a visual journey into the world of unforgettable celebrations.<br></br> Our gallery is a testament to our passion<br></br> for crafting extraordinary events that leave lasting memories.</p>
            </div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/HhqqQ6Y/silder1.webp" className="w-full  h-5/6" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/yNGWS4h/silder3.webp" className="w-full h-5/6" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4Ty3H2G/silder4.webp" className="w-full h-5/6" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/RBwL6V1/slide.webp" className="w-full h-5/6" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;