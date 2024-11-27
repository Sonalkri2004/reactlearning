// import React from 'react'

// const Card = (props) => {
//   return (
//     <div className='bg-black text-white inline-block p-6 text-center rounded mr-5 h-60 w-60'>
//         <h1>{props.user}</h1> 
//         <h2>{props.city},{props.age}</h2>
//         <h2>{props.profession}</h2>
//         <button className='bg-emerald-500 rounded p-2 font-semibold mt-8'>Add friend</button>



//     </div>
//   )
// }

// export default Card


import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-500 text-white flex items-center justify-between'>
        <h2 className='text-2xl'>React</h2>

        <div className='flex gap-10'>

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>

        </div>

    </div>
  )
}

export default Header
