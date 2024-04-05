import React from 'react'
import mainImg from "../../images/main.png"
import Button from '../Button'
// import TitleText from '../TitleText'


const Header = () => {
    const backImage = {
        backgroundImage: `url(${mainImg})`,
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
  return (
    <div className='w-full h-screen' style={backImage}>
        <div className='container w-full h-screen flex flex-col justify-around items-center md:gap-[25px] gap-[15px] font-[Poppins]  text-white '>
            {/* <TitleText title="Service"/> */}
            <div className=' items-center flex flex-col gap-[20px]'>
               <div className='flex items-center gap-3'>
                <div className='md:text-[65px] text-[50px]'>🍁</div>
                <div>
                    <div className='md:text-[40px] text-[30px] font-bold font-[Poppins] '>Round Rock</div>
                    <div className='text-[18px] md:text-[20px] font-bold '>Yard Maintenance</div>
                </div>
            </div>
            <div className='md:text-[18px] text-[16px]  md:py-[12px] px-[35px] bg-[#0000007d] text-center  rounded-full'>
            Round Rock, Texas – City Government is at Old Settlers Park.
            </div>
            <div className='md:text-[70px] lg:text-[100px] text-[45px] md:leading-[90px] leading-[60px]  font-bold text-center '>
                Welcome to the <p className='text-[#ff4e4e]'>Round Rock</p> Garden.
            </div>  
            </div>
             <div><Button/></div>
        </div>
       
    </div>
  )
}

export default Header