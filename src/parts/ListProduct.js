import React, { useState } from 'react';



function ListProduct() {
  const list = [
    { id: 1, title: "QUẦN ỐNG LOE Q01462", price: "899,000₫", img: require('../assets/images/sp1a.jpg') },
    { id: 2, title: "ÁO VEST DÁNG AK02932", price: "999,000₫", img: require('../assets/images/sp2a.jpg') },
    { id: 3, title: "SƠ MI HỌA TIẾT SM03002", price: "899,000₫", img: require('../assets/images/sp3a.jpg') },
    { id: 4, title: "ĐẦM MAXI TRẮNG D04412", price: "1,599,000₫", img: require('../assets/images/sp4a.jpg') },
    { id: 5, title: "ÁO CỔ VEST AK02672", price: "999,000₫", img: require('../assets/images/sp5a.jpg') },
    { id: 6, title: "ĐẦM ĐÍNH CƯỜM D01862", price: "1,599,000₫", img: require('../assets/images/sp6a.jpg') },
    
    { id: 7, title: "ÁO KÝ GIẢ CỔ NƠ AK01472", price: "1,099,000₫", img: require('../assets/images/sp7a.jpg') },
    { id: 8, title: "SƠ MI HỌA TIẾT SM00122", price: "799,000₫", img: require('../assets/images/sp8a.jpg') },
    { id: 9, title: "ÁO VEST PHỐI DÂY AK13722", price: "699,000₫", img: require('../assets/images/sp9a.jpg') },
    { id: 10, title: "ĐẦM NÂU THIẾT KẾ D12792", price: "909,300₫", img: require('../assets/images/sp10a.jpg') }
    
  ];

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [hoveredProducts, setHoveredProducts] = useState({
    slider1: null,
    slider2: null
  });

  const nextSlide1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex === list.length - 4 ? 0 : prevIndex + 1));
  };

  const prevSlide1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex === 0 ? list.length - 4 : prevIndex - 1));
  };

  const nextSlide2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex === list.length - 4 ? 0 : prevIndex + 1));
  };

  const prevSlide2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex === 0 ? list.length - 4 : prevIndex - 1));
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
      <div className="mx-auto lg:h-96 xl:h-full md:h-96">
        <h1 className="md:text-2xl uppercase font-bold mb-7 2xl:text-3xl">Sản phẩm nổi bật</h1>
        <div className="grid grid-cols-12 gap-0  "style={{ height: '35rem' }} >
          
          <div className="col-span-2 lg:h-2/3 md:h-1/2 xl:h-full">
            <button className='pre-slide ' onClick={prevSlide1}>{'<'}</button>
          </div>
          
          {list.slice(currentIndex1, currentIndex1 + 4).map((product) => (
            <div className="md:col-span-2 m-1 relative cursor-pointer lg:h-2/3 md:h-1/2 xl:h-full" 
    
              onMouseEnter={() => handleMouseEnter(product.id, 'slider1')}
              onMouseLeave={() => handleMouseLeave('slider1')}
              key={product.id}>
              <div className="absolute hover-modal w-0" style={{ width: hoveredProducts.slider1 === product.id ? '100%' : '0%' }}></div>
              <img src={product.img} className="w-full h-5/6 " alt={product.title} />
              
              <div className="">
                <h4 className="h-1/2 pt-3 font-semibold text-gray-400 lg:text-xs">{product.title}</h4>
                <p className="h-1/2 font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
          <div className="col-span-2 lg:h-2/3 md:h-1/2 xl:h-full" >
            <button className='next-slide' onClick={nextSlide1}>{'>'}</button>
          </div>
        </div>
      </div>




      {/* Slider 2 */}
      <div className="mx-auto lg:h-96 xl:h-full mt-16 lg:mt-28 lg:mb-24 md:h-96">
        <h1 className="md:text-2xl uppercase font-bold mb-7 2xl:text-3xl">Độc quyền online</h1>
        <div className="grid grid-cols-12 gap-0" style={{ height: '35rem' }}>
    
          <div className="col-span-2 lg:h-2/3 md:h-1/2 xl:h-full">
            <button className='pre-slide' onClick={prevSlide2}>{'<'}</button>
          </div>
    
            {list.slice(currentIndex2, currentIndex2 + 4).map((product) => (
              <div className="md:col-span-2 m-1 relative cursor-pointer lg:h-2/3 md:h-1/2 xl:h-full"
                onMouseEnter={() => handleMouseEnter(product.id, 'slider2')}
                onMouseLeave={() => handleMouseLeave('slider2')}
                key={product.id}>
                <div className="absolute hover-modal w-0" style={{ width: hoveredProducts.slider2 === product.id ? '100%' : '0%' }}></div>
                <img src={product.img} className="w-full h-5/6" alt={product.title} />
                
                <div className="">
                  <h4 className="h-1/2 pt-3 font-semibold text-gray-400 lg:text-xs">{product.title}</h4>
                  <p className="h-1/2 font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
            <div className="col-span-2  ">
              <button className='next-slide' onClick={nextSlide2}>{'>'}</button>
            </div>
          </div>
      </div>


    </div>
  );
}

export default ListProduct;
