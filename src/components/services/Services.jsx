import React from 'react'
import TitleText from '../TitleText'
 import pngImg from "../../images/image.png"
import Services_img1 from "../../images/service_1.png"
import Services_img2 from "../../images/service_2.png"
import Services_img3 from "../../images/service_3.png"
import Button from '../Button'

 const DYMMY_DATA=[
    {
        id:1,
        Img:Services_img1,
        title:"Pasture",
        discription:"Round Rock’s name was inspired by a, you guessed it, round rock that juts from the trickling waters of the nearby Brushy Creek. In the City’s earliest days, the rock marked a low point frequently used by wagons and cattle drivers to cross the waterway."
    }, 
    {
        id:2,
        Img:Services_img2,
        title:"Pasture",
        discription:"Round Rock’s name was inspired by a, you guessed it, round rock that juts from the trickling waters of the nearby Brushy Creek. In the City’s earliest days, the rock marked a low point frequently used by wagons and cattle drivers to cross the waterway."
    }, 
    {
        id:3,
        Img:Services_img3,
        title:"Pasture",
        discription:"Round Rock’s name was inspired by a, you guessed it, round rock that juts from the trickling waters of the nearby Brushy Creek. In the City’s earliest days, the rock marked a low point frequently used by wagons and cattle drivers to cross the waterway."
    }
 ]




const Services = () => {
  return (
    <div className=' w-full container py-10 flex flex-col items-center font-[Poppins]  gap-14'>
        <div className='relative '>
            <img className=' md:w-[90px] w-[50px]  absolute left-[70%] md:top-[35px] top-[20px]' src={pngImg} alt="img" />
          <TitleText title='Services'/>  
        </div>
        <div>
            <div className='justify-center gap-16 w-full flex flex-wrap flex-col md:flex-row items-center text-[#0a2050] my-[25px] lg:px-8 sm:px-5 px:-3'>
                {DYMMY_DATA.length === 0 ? "No Feature" :DYMMY_DATA.map((item,key)=>(
                            <div className='flex flex-col justify-center items-center md:max-w-[300px] max-w-[250px] w-full rounded-l-[30px] rounded-r-[30px] shadow-lg shadow-[#c8f0c2]'>
                            <img src={item.Img} alt="" />
                            <div className='p-[20px] text-[#0D4D14]'>
                                <h2 className='md:text-[25px] text-[18px] flex justify-start font-[900]'>{item.title}</h2>
                                <p  className='max-w-[200px] w-full md:text-[14px] text-[12px] leading-[14px]'>{item.discription}
                                </p>     
                            </div>

                        </div>
                        ))}
            </div>
      
       
        </div>
        <div className='shadow-[#80ff6c] hover:shadow-[#80ff6c] shadow-sm hover:shadow-lg rounded-full'><Button/></div>
      

    </div>
  )
}

export default Services
