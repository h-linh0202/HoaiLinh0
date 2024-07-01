import React, { useState } from 'react';



function ListBlog() {
  const listBlog = [
    { id: 1, title: "SUIT - XU HƯỚNG THỜI TRANG CHO QUÝ CÔ QUYỀN LỰC", price: "899,000₫", img: require('../assets/images/listBlog/sp1.jpg') },
    { id: 2, title: "KHÁM PHÁ 4 HỌA TIẾT THỒNG LĨNH MÙA XUÂN - HÈ", price: "899,000₫", img: require('../assets/images/listBlog/sp2.jpg') },
    { id: 3, title: "RẠNG RỠ ĐÓN HÈ CÙNG VÁY HOA", price: "899,000₫", img: require('../assets/images/listBlog/sp3.jpg') },
    { id: 4, title: "3 MẪU TRANG PHỤC CỔ VEST THANH LỊCH VÀ SANG TRỌNG CHO CÔ NÀNG CÔNG SỞ", price: "899,000₫", img: require('../assets/images/listBlog/sp4.jpg') },
    { id: 5, title: "SUMMER FESTIVAL - ÁO PHÔNG CHỈ TỪ 299K", price: "899,000₫", img: require('../assets/images/listBlog/sp5.jpg') },
    { id: 6, title: "QUẦN ỐNG LOE Q01462", price: "899,000₫", img: require('../assets/images/listBlog/sp6.jpg') }

    
  ];

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [hoveredProducts, setHoveredProducts] = useState({
    slider1: null,
    slider2: null
  });

  const nextSlide1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex === listBlog.length - 4 ? 0 : prevIndex + 1));
  };

  const prevSlide1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex === 0 ? listBlog.length - 4 : prevIndex - 1));
  };

  const nextSlide2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex === listBlog.length - 4 ? 0 : prevIndex + 1));
  };

  const prevSlide2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex === 0 ? listBlog.length - 4 : prevIndex - 1));
  };

  const handleMouseEnter = (productId, slider) => {
    setHoveredProducts((prevProducts) => ({
      ...prevProducts,
      [slider]: productId
    }));
  }

  const handleMouseLeave = (slider) => {
    setHoveredProducts((prevProducts) => ({
      ...prevProducts,
      [slider]: null
    }));
  }

  return (
    <div className="mx-auto mt-16">
      {/* Slider 1 */}
      <div className="mx-auto">
        <h1 className="text-4xl uppercase font-bold mb-4 md:text-2xl uppercase font-bold mb-7 2xl:text-3xl lg:mb-2">NHL BLOG</h1>
        <h4 className='mb-8'>ĐÓN ĐẦU XU HƯỚNG, ĐỊNH HÌNH PHONG CÁCH</h4>
        <div className="grid grid-cols-11 gap-0 xl:h-full " >
          
          <div className="col-span-1 h5">
            <button className='pre-slide ' onClick={prevSlide1}>{'<'}</button>
          </div>
          
          {listBlog.slice(currentIndex1, currentIndex1 + 3).map((product) => (
            <div className="col-span-3 m-1 relative cursor-pointer blog-image "  
            
              onMouseEnter={() => handleMouseEnter(product.id, 'slider1')}
              onMouseLeave={() => handleMouseLeave('slider1')}
              key={product.id}>
              <div className="absolute hover-modal w-0 " style={{ width: hoveredProducts.slider1 === product.id ? '100%' : '0%' }}></div>

              <img src={product.img} className="w-full h-5/6 " alt={product.title} />

              
              <div className="h-1/6">
                <h4 className=" pt-3 font-semibold text-gray-400">{product.title}</h4>
              </div>
            </div>
          ))}
          <div className="col-span-1" >
            <button className='next-slide' onClick={nextSlide1}>{'>'}</button>
          </div>
        </div>
      </div>



    </div>
  );
}

export default ListBlog;
