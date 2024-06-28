import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ListProduct from '../parts/ListProduct'
import ListBlog from '../parts/ListBlog'
import Footer from '../parts/Footer'




function SimpleSlider() {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <div className="slider-wrapper w-11/12 h-96 mx-auto hight_slider">
        <Slider className='w-full slider__group ' ref={sliderRef} {...settings}>
          <div>
            <img className='w-full h-96' src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3.jpg?v=1228" alt="Slide 1" />
          </div>
          <div>
            <img className='w-full h-96' src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img4.jpg?v=1228" alt="Slide 2" />
          </div>
          <div>
            <img className='w-full h-96' src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img4.jpg?v=1228" alt="Slide 3" />
          </div>
        </Slider>
        <div className="navigation">
          <button className="prev-btn" onClick={goToPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>

          </button>
          <button className="next-btn" onClick={goToNext}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>

          </button>
        </div>
      </div>

      <div className='group__top flex ' >
        
          <div className='group__top-one h-full'>

            <div className='group__top-one-img w-full'>
                <img src='https://theme.hstatic.net/200000182297/1000887316/14/home_new_banner_1.jpg?v=1228'></img>
            </div>
            <div className='group__top-one-text w-full flex justify-between'>
                <p >Dress</p>
                <p >Shop now</p>

            </div>

          </div>



            <div className='group__top-one h-full group__top-two'>

              <div className='group__top-one-img w-full'>
                  <img src='https://theme.hstatic.net/200000182297/1000887316/14/home_new_banner_2.jpg?v=1228'></img>
              </div>
              <div className='group__top-one-text w-full flex justify-between'>
                  <p >Dress</p>
                  <p >Shop now</p>

              </div>

            </div>

      </div>

      <ListProduct></ListProduct>


      <div className='mt-8'>
        <img src='https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3.jpg?v=1338'></img>
      </div>



      <ListBlog></ListBlog>

      <Footer></Footer>

      
    </div>
  );
}

export default SimpleSlider;
