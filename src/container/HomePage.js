import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ListProduct from '../parts/ListProduct';
import ListBlog from '../parts/ListBlog';
import Footer from '../parts/Footer';
import { FaChevronUp } from "react-icons/fa";

const HomePage = () => {
  const sliderRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev(); // Sử dụng optional chaining để tránh lỗi nếu sliderRef.current là null
  };

  const goToNext = () => {
    sliderRef.current?.slickNext(); // Sử dụng optional chaining để tránh lỗi nếu sliderRef.current là null
  };



  return (
    <div>
      <div className="slider-wrapper  w-full mx-auto hight_slider" style={{marginTop: " 80px"}} >
        <Slider className='w-full slider__group ' ref={sliderRef} {...settings}>
          <div>
            <img className='w-full xl:w-full ' src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3.jpg?v=1228" alt="Slide 1" />
          </div>
          <div>
            <img className='w-full xl:w-full' src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img4.jpg?v=1228" alt="Slide 2" />
          </div>
          <div>
            <img className='w-full xl:w-full' src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img4.jpg?v=1342" alt="Slide 3" />
          </div>
        </Slider>
        <div className="navigation">
          <button className="prev-btn outline-none" style={{ background: "rgba(0, 0, 0, 0.7)" }} onClick={goToPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>
          <button className="next-btn outline-none" style={{ background: "rgba(0, 0, 0, 0.7)" }} onClick={goToNext}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      <div className='group__top grid grid-cols-6 flex' >

        <div className='group__top-one col-span-6 mx-auto'>
          <div className='group__top-one-img w-full  '>
            <img src='https://theme.hstatic.net/200000182297/1000887316/14/home_new_banner_1.jpg?v=1228' alt="Banner 1" />
          </div>

          <div className='group__top-one-text w-full flex justify-between'>
            <p>Dress</p>
            <p>Shop now</p>
          </div>
        </div>

        <div className='group__top-one col-span-6 mx-auto '>
          <div className='group__top-one-img w-full'>
            <img src='https://theme.hstatic.net/200000182297/1000887316/14/home_new_banner_2.jpg?v=1228' alt="Banner 2" />
          </div>
          <div className='group__top-one-text w-full flex justify-between'>
            <p>Dress</p>
            <p>Shop now</p>
          </div>
        </div>
      </div>

      <ListProduct />
      
      <div className='mt-8'>
        <img src='https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3.jpg?v=1338' alt="Another Banner" />
      </div>

      {/* Nút cuộn đầu trang */}
      <div id="back-to-top-button" className='back-to-top h-10 w-10 fixed bottom-5 right-5 flex rounded-sm bg-black'>
        <FaChevronUp onClick={scrollToTop} style={{ margin: "auto", color: "white", cursor: "pointer" }} />
      </div>

      <ListBlog />
      <Footer />
    </div>
  );
};

export default HomePage;
