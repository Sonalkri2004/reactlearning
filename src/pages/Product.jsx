// import React from 'react'

// const Product = () => {
//   return (
//     <div>Product</div>
//   )
// }

// export default Product


import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Product = () => {


 

const [data, setData] = useState([]);


  const getData = async ()=>{

    const response= await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
    setData(response.data);
    // console.log(data);
  }


  useEffect(() => {
    getData();
  }, [])
  

  return (
     
    <div className='p-10'>
        {/* <button  onClick={getData}  className='bg-cyan-400 text-black font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button> */}
        <div className='p-5 mt-5 bg-black'>
              {
                data.map(function (elem,idx){
                  return <div key={idx} className='bg-indigo-400 text-black flex items-center px-7 py-6 justify-between w-full rounded mb-3'>
                               <img className='h-60' src={elem.download_url} />
                               <h1 className='font-bold text-1xl'>{elem.author}</h1>
                  </div>
                })
              }
        </div>
    </div>

  )
}

export default Product
