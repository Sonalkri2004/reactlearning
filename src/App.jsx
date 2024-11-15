import React, { useState } from 'react'

const App = () => {
 
  const [a, setA] = useState(10);
  const [username, setUsername] = useState('')


//avoid negative value after decrement.

  if(a<0){
    setA(0);
  }


  const submitHandler = (e)=>{
    e.preventDefault();
     console.log(username)
     setUsername('')
  }


  return (
    <div>
      <h1 className='bg-yellow-300 text-5xl'>The value of a is {a}</h1>
      <button onClick={()=>setA(a+10)} className='bg-green-400 mt-7 ml-7 rounded text-center font-bold p-2'>Increment</button>
      <button onClick={()=>setA(a-10)} className='bg-green-400 mt-7 ml-7 rounded text-center font-bold p-2'>Decrement</button>



       {/* form handling */}

       <form onSubmit={(e)=>{submitHandler(e)
       }
       }>
        <input 
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value);

        }}
        className='px-4 rounded py-3 text-xl m-5 bg-black text-white' type='text' placeholder='Enter your name'/>
        <button className='px-4 py-3 text-xl font-semibold bg-emerald-600 rounded text-white'>Submit</button>
       </form>

    </div>
  )
}

export default App