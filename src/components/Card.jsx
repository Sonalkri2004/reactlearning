import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-black text-white inline-block p-6 text-center rounded mr-5 h-60 w-60'>
        <h1>{props.user}</h1> 
        <h2>{props.city},{props.age}</h2>
        <h2>{props.profession}</h2>
        <button className='bg-emerald-500 rounded p-2 font-semibold mt-8'>Add friend</button>

    </div>
  )
}

export default Card