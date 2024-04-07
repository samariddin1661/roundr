import React from 'react'
import TitleText from '../TitleText'
import img from "../../images/image.png"
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";
import { FaLocationDot,FaTelegram } from "react-icons/fa6";
const Contac = () => {
  return (
    <div className='w-full my-[50px] '>
      <div className='flae flex-col gap-[60px]'>
      <div className='relative'>
        <img src={img} alt="img" className='absolute md:w-[100px] w-[70px] right-[50%]' />
        <TitleText title='Contacts'/>
      </div>
      <div className='w-full flex flex-wrap items-center gap-[25px] justify-evenly'>
        <div className='flex flex-col gap-[15px]'>
          <input className='max-w-[300px] w-full md:h-[50px] h-[35px] p-[5px] md:text-[14px] text-[12px] border-[2px] border-[#143e20]     text-[black] outline-none rounded-3xl  ' type="text" placeholder='Your name'/>
          <input className='max-w-[300px] w-full md:h-[50px] h-[35px] p-[5px] md:text-[14px] text-[12px] border-[2px] border-[#143e20]    text-[black] outline-none rounded-3xl   ' type="nomber" placeholder='Phone number' />
          <input className='max-w-[300px] w-full md:h-[50px] h-[35px] p-[5px] md:text-[14px] text-[12px] border-[2px] border-[#143e20]    text-[black] outline-none rounded-3xl   ' type="email" placeholder='Your email address' />
          <button className='w-[100px] md:h-[50px] h-[35px] font-[600] md:text-[14px] text-[12px] text-white hover:text-[#076020] border-[2px] hover:bg-white text-center hover:border-[#076020]   bg-[#076020] outline-none rounded-3xl p-[5px]'>Submit</button>
        </div>
        <div className='flex flex-col gap-[30px] md:text-[14px] text-[12px]'>
          <span className='flex gap-[40px]'>
            <i className='w-[20px] md:text-[25px] text-[18px] text-[#4DB96B]'><MdOutlineMail /></i>
            <p>samariddinraxmonov6@gmail.com</p>
          </span>
          <span className='flex gap-[40px]'>
            <i className='w-[20px] md:text-[25px] text-[18px] text-[#4DB96B]'><FaPhoneAlt /></i>
            <p>(94) 696-16-61</p>
          </span>
          <span className='flex gap-[40px]'>
            <i className='w-[20px] md:text-[25px] text-[18px] text-[#4DB96B]'><FaLocationDot /></i>
            <p>Uzbekiston Karshi</p>
          </span>
          <span className='flex w-full justify-center items-center gap-[40px]'>
            <a href="https://www.instagram.com/rakhmonof_00" className='bg-[#4DB96B] border-[2px] hover:bg-white text-center hover:border-[#076020] text-[#d22828] p-4 rounded-full md:text-[20px] text-[15px]'><FaInstagramSquare  /></a>
            <a href="https://t.me/Alpen_gold_sr" className='bg-[#4DB96B] border-[2px] hover:bg-white text-center hover:border-[#076020] text-[#016d8b] p-4 rounded-full md:text-[20px] text-[15px]'><FaTelegram /></a>
            <a href="https://github.com/samariddin1661" className='bg-[#4DB96B] border-[2px] hover:bg-white text-center hover:border-[#076020] text-[#000000] p-4 rounded-full md:text-[20px] text-[15px]'><FaGithubSquare /></a>
          </span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contac
