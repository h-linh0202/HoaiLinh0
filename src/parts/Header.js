import { Link } from 'react-router-dom';
import { memo, useState } from "react";

function Header () {
    const [menu] = useState(["SẢN PHẨM", "BỘ SƯU TẬP", "SẢN PHẨM GIÁ TỐT", "SALE", "BỘ SƯU TẬP"]);
    const urls = ["/Products", "/collections", "/good-deals", "/sale"]; 
    return (
        <div className="">

            <div className="h-20 header flex items-center fixed bg-white z-20 w-full" style={{marginTop: " -80px"}}>

                <div className="w-1/4 mx-auto text-5xl ">NHL</div>
                <div className=" mx-auto w-1/3 font-semibold xl:bg-white lg:bg-blue-500 md:bg-green-500 sm:bg-yellow-500" style={{display: "flex"}}>
                    {menu.map((menu, index)=>(
                        <Link className='mx-auto xl:text-base lg:text-sm md:text-sm' style={{margin: "auto"}} to={urls[index]}>{menu}</Link>
                    ))}
                </div>
                <div className="w-1/3 mx-auto " >
                    <div className='w-1/2 mx-auto flex h-5'>
                        <div className='mx-auto border-r border-solid border-gray-400 pr-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 lg:h-5 md:h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                        </div>
                        <div className='mx-auto ml-0 '>
                            <span className='flex border-r border-solid border-gray-400 pr-6 ' >
                               
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 lg:h-5 md:h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p className="ml-2 font-semibold xl:text-base md:text-sm lg:text-sm" >Account</p>
                            </span>
                            

                        </div>
                        <div className='mx-auto ml-0'>
                            <span className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 lg:h-5 md:h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <p className="ml-2 font-semibold xl:text-base md:text-sm lg:text-sm">Cart</p>
                            </span>
                        </div>
                    </div>

                </div>

            </div>


        </div>

    );
};
export default memo(Header);