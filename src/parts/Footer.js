import { Link } from 'react-router-dom';
import { memo, useState, useEffect } from "react";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";



function Footer () {
    return(
        <div className="bg-gray-500 col-span-1 mt-10">
            <div className='pre__footer col-span-1 h-50 pt-10 pb-10 ' style={{background: "#EFEFF4"}}>
                <div className="col-span-3 flex h-full">

                    <div className='h-full w-1/3'></div>
                    <div className='h-full w-1/3'>
                        <h1 className="text-3xl uppercase font-bold">Đăng ký bảng tin</h1>
                        <p className='font-semibold mt-3 text-base'>Đăng ký nhận bản tin NEM để được cập nhật những mẫu thiết kế mới nhất</p>
                        <div className='w-full h-12 bg-red-300 flex mt-10'>
                            <input className='w-3/4 pl-3 outline-none text-sm border border-gray-400' placeholder='Vui lòng nhập địa chỉ email...'></input>
                            <button className='text-center w-1/4 font-semibold bg-black text-white uppercase' >Đăng ký</button>
                        </div>
                        <div className='w-32 h-9 mx-auto mt-5 flex'>

                            <div className='h-full w-9 bg-blue-600 mx-auto flex rounded-full'>
                                <FaFacebookF style={{fontSize: "19px", margin: "auto", color: "white"}}/>
                            </div>

                            <div className='h-full w-9 bg-red-500 mx-auto flex rounded-full'>
                                <FaInstagram style={{fontSize: "19px", margin: "auto", color: "white"}}/>
                            </div>

                            <div className='h-full w-9 bg-red-500 mx-auto flex rounded-full'>
                                <FaYoutube style={{fontSize: "19px", margin: "auto", color: "white"}}/>

                            </div>

                            

                        </div>
                    </div>
                    <div className='h-full w-1/3'></div>

                </div>
            </div>

            
            <div className="footer__between bg-black h-70 flex grid grid-cols-12">


                <div className=" md:col-span-3 mx-auto text-sm pt-10 pb-10 flex ml-32">
                    <div className="text-left text-white">
                    <h1 className="font-semibold uppercase mb-2">NHL FASHION - THỜI TRANG CÔNG SỞ</h1>
                    <p className="mt-1">Công ty TNHH Dịch vụ và Thương mại An Thành.</p>
                    <p className="mt-1">Số ĐKKD 0107861393, Sở KHĐT Tp. Hà Nội cấp ngày 04/10/201</p>
                    <p className="mt-1">Địa chỉ: Lô 1+2, Ô quy hoạch E.2/NO7 đường Lâm Hạ phường Bồ Đề, quận Long Biên, Hà Nội</p>
                    <p className="mt-1">Chăm sóc khách hàng: 0246.2591551</p>
                    <p className="mt-1">Mua hàng online: 0246.2909098</p>
                    <p className="mt-1">Email: nemcskh@stripe-vn.com</p>
                    </div>
                </div>

                <div className=" md:col-span-3 mx-auto text-left text-white pt-10">
                    <p className="mt-1 font-semibold">Giới thiệu</p>
                    <p className="mt-1">Triết lý kinh doanh tại NEM Fashion</p>
                    <p className="mt-1">NHL's Blog</p>
                    <p className="mt-1">Hệ thống showroom</p>
                    <p className="mt-1">Liên hệ</p>
                </div>

                <div className=" md:col-span-3 mx-auto text-left text-white pt-10">
                    <p className="mt-1 font-semibold">Chính sách giao nhận - Vận chuyển</p>
                    <p className="mt-1">Hướng dẫn thanh toán</p>
                    <p className="mt-1">Tra cứu đơn hàng</p>
                    <p className="mt-1">Hướng dẫn chọn Size</p>
                    <p className="mt-1">Quy định đổi hàng</p>
                    <p className="mt-1">Quy định bảo hành và sửa chữa</p>
                    <p className="mt-1">Khách hàng thân thiết</p>
                </div>

                <div className=" md:col-span-3 mx-auto text-left text-white mr-32 pt-10">
                    <p className="mt-1 font-semibold">Phương thức thanh toán</p>
                    <img src="https://theme.hstatic.net/200000182297/1000887316/14/image_method_3.png?v=1339" alt="Payment Methods" className="mt-1"/>
                </div>
            </div>

            <div className='end__footer col-span-1 h-12' style={{background: "#EFEFF4"}}>
                <div className='w-3/4 h-full mx-auto text-left flex'>
                    <p className='my-auto '>© 2024 - Bản quyền NHL</p>
                </div>
            </div>

            {/* <div className="flex grid grid-cols-12 h-96 sm:col-span-12">
                <div className="bg-red-500 md:col-span-4 sm:col-span-12">a</div>
                <div className="bg-red-500 md:col-span-4 sm:col-span-12">a</div>
                <div className="bg-red-500 md:col-span-4 sm:col-span-12">a</div>
            </div> */}
        </div>
    )
}

export default memo(Footer);
