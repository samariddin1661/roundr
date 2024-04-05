import React from 'react'

const TitleText = (props) => {

  return (
    <div className=' text-center text-[grey] text-[34px] md:text-[64px]'>
        {props.title}
    </div>
  )
}

export default TitleText