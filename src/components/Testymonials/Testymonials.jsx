import React from 'react'
import Button from '../Button'
import TitleText from '../TitleText'
import img from "../../images/image.png"
import personImg1 from "../../images/pro1.webp"
import personImg2 from "../../images/pro2.webp"
import personImg3 from "../../images/pro3.webp"
import personImg4 from "../../images/pro4.webp"
import StarRatings from 'react-star-ratings'

const DYMMY_DATA=[
  {
      id:1,
      img:personImg1,
      titli:"Courtney Henry",
      discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      rating:3.4
  },
  {
    id:2,
    img:personImg2,
    titli:"Courtney Henry",
    discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating:3
},
{
  id:3,
  img:personImg3,
  titli:"Courtney Henry",
  discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  rating:4
},
{
  id:4,
  img:personImg4,
  titli:"Courtney Henry",
  discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  rating:2
},
]


const Testymonials = () => {
  return (
    <div className='container w-full flex flex-col gap-7 items-center'>
      <div className='relative'>
        <img src={img} alt="img" className='absolute w-[100px] right-0' />
        <TitleText  title='Testymonials'/>
      </div>

      <div className='flex flex-wrap  justify-center  gap-7' >
      {DYMMY_DATA.length === 0 ? "No Feature" :DYMMY_DATA.map((item,key)=>(
        <div className='border-[2px] border-solid border-[#6CB981] p-6 rounded-3xl shadow-md shadow-[#76de84]  flex flex-wrap  gap-3 font-[Poppins] '>
          <div>
          <img src={item.img} alt="" className='w-[90px]' />
          </div>
        <div className='text-[#6CB981] flex flex-col gap-3'>
          <h1 className='md:text-[18px] text-[16px] font-[600]'>{item.titli}</h1>
          <p className='md:max-w-[320px] max-w-[300px] md:text-[14px] text-[12px] leading-[18px]'>{item.discription}</p>
          <i>
          <StarRatings
            rating={item.rating}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#6CB982"
          />
          </i>
        </div>
        </div>
        
        ))}
       
        
      </div>
      <div className='shadow-[#80ff6c] hover:shadow-[#80ff6c] shadow-sm hover:shadow-lg rounded-full'><Button/></div>
      <hr /><hr />
    </div>
  )
}

export default Testymonials
