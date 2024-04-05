import React from 'react'
import TitleText from '../TitleText'
import img from "../../images/image.png"
import Button from '../Button'
import imgAbout from "../../images/about.png"

const DYMMY_DATA=[
  {
      id:1,
      box:" Weighing in at two pounds, the world-famous Texas-Sized Donut must be seen to be believed. Featured on the Travel Channel’s Man vs. Food and countless newspapers and websites, this colossal confection brings people from all over the nation to Round Rock Donuts.Founded in 1926, "
  },
  {
    id:2,
    box:" Weighing in at two pounds, the world-famous Texas-Sized Donut must be seen to be believed. Featured on the Travel Channel’s Man vs. Food and countless newspapers and websites, this colossal confection brings people from all over the nation to Round Rock Donuts.Founded in 1926, "
},
{
  id:3,
  box:" Weighing in at two pounds, the world-famous Texas-Sized Donut must be seen to be believed. Featured on the Travel Channel’s Man vs. Food and countless newspapers and websites, this colossal confection brings people from all over the nation to Round Rock Donuts.Founded in 1926, "
}
]

const About = () => {
  const backImage = {
    backgroundImage: `url(${imgAbout})`,
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}
  return (
    <div className='w-full '  >
      <div className='w-full flex flex-col gap-[20px]  items-center justify-center font-[Poppins] py-10' >
        <div className='relative'>
          <img src={img} alt="img" className='absolute  md:w-[90px] w-[50px]   left-[0%] md:top-[-7px] top-[-10px] rotate-[180deg] ' /> 
          <TitleText title='About'/>
      </div>
      
    <div className='border w-full  h-[80vh] relative 'style={backImage}>
      <div className='flex h-[70vh] flex-wrap gap-3 md:flex-row items-center justify-around w-full absolute text-white my-[25px] lg:px-8 sm:px-5 px:-3'>
      {DYMMY_DATA.length === 0 ? "No Feature" :DYMMY_DATA.map((item,key)=>(
        <div className='md:max-w-[300px] text-center max-w-[350px] w-full md:text-[14px] text-[12px]'>{item.box}</div>
      ))}
    
      </div>
    </div>
        <div  className='shadow-[#80ff6c] hover:shadow-[#80ff6c] shadow-sm hover:shadow-lg rounded-full p-0 '><Button/></div>
      
      
      </div>

    </div>
  )
}

export default About
