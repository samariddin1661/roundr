import React from 'react'
import TitleText from '../TitleText'
import img from "../../images/image.png"
const Contac = () => {
  return (
    <div className='w-full '>
      <div className='relative'>
        <img src={img} alt="img" className='absolute md:w-[100px] w-[70px] right-[50%]' />
        <TitleText title='Contacts'/>
      </div>
    </div>
  )
}

export default Contac
