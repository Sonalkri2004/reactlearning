import React, { useState } from 'react'

const App = () => {
 
  const [a, setA] = useState(10);


//avoid negative value after decrement.

  if(a<0){
    setA(0);
  }


  return (
    <div>
      <h1 className='bg-yellow-300 text-5xl'>The value of a is {a}</h1>
      <button onClick={()=>setA(a+10)} className='bg-green-400 mt-7 ml-7 rounded text-center font-bold p-2'>Increment</button>
      <button onClick={()=>setA(a-10)} className='bg-green-400 mt-7 ml-7 rounded text-center font-bold p-2'>Decrement</button>
    </div>
  )
}

export default App