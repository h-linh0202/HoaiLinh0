import { Link } from 'react-router-dom';
import { memo, useState, useEffect } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
function Footer () {
    return(
        <div className="bg-gray-500 col-span-1">
            <div className='pre__footer bg-red-200 col-span-1 h-60'>
                <div className="col-span-3 flex h-full bg-yellow-400">

                    <div className='h-full w-1/3'></div>
                    <div className='h-full w-1/3 bg-cyan-400'>
                        <h1 className="text-3xl uppercase font-semibold">Đăng ký bảng tin</h1>
                        <p className='font-semibold mt-3'>Đăng ký nhận bản tin NEM để được cập nhật những mẫu thiết kế mới nhất</p>
                        <div className='w-full h-12 bg-red-300 flex mt-10'>
                            <input className='w-3/4 pl-3 outline-none text-sm border border-gray-400' placeholder='Vui lòng nhập địa chỉ email...'></input>
                            <button className='text-center w-1/4 font-semibold bg-black text-white uppercase' >Đăng ký</button>
                        </div>
                        <div className='w-32 h-10 bg-red-300 mx-auto mt-5'>
                        <FaBeer />?
                        </div>
                    </div>
                    <div className='h-full w-1/3'></div>

                </div>
            </div>
            <div className='footer__between bg-blue-200 col-span-1 h-72'></div>
            <div className='end__footer bg-green-200 col-span-1 h-12'></div>


        </div>
    )
}

export default memo(Footer);
