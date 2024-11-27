// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// // import Card from './components/Card'

// const App = () => {

// //  const users=[
// //   {
// //     "name": "Alice Johnson",
// //     "age": 28,
// //     "city": "New York",
// //     "profession": "Software Engineer"
// //   },
// //   {
// //     "name": "Rahul Sharma",
// //     "age": 32,
// //     "city": "Mumbai",
// //     "profession": "Data Analyst"
// //   },
// //   {
// //     "name": "Emily Davis",
// //     "age": 24,
// //     "city": "London",
// //     "profession": "Graphic Designer"
// //   },
// //   {
// //     "name": "Hiroshi Tanaka",
// //     "age": 45,
// //     "city": "Tokyo",
// //     "profession": "Marketing Manager"
// //   },
// //   {
// //     "name": "Fatima Khalid",
// //     "age": 30,
// //     "city": "Dubai",
// //     "profession": "Architect"
// //   }
// // ]
 

// const [data, setData] = useState([]);


//   const getData = async ()=>{

//     const response= await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
//     setData(response.data);
//     // console.log(data);
//   }


//   useEffect(() => {
//     getData();
//   }, [])
  

//   return (


//     // <div className='p-10'>
//     //   {users.map((elem,idx)=>{
//     //     return
//     //      <Card key={idx} user={elem.name} city={elem.city} age={elem.age} profession={elem.profession} />
//     //   })}
//     // </div>

     
//     <div className='p-10'>
//         <button  onClick={getData}  className='bg-cyan-400 text-black font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
//         <div className='p-5 mt-5 bg-black'>
//               {
//                 data.map(function (elem,idx){
//                   return <div key={idx} className='bg-indigo-400 text-black flex items-center px-7 py-6 justify-between w-full rounded mb-3'>
//                                <img className='h-60' src={elem.download_url} />
//                                <h1 className='font-bold text-1xl'>{elem.author}</h1>
//                   </div>
//                 })
//               }
//         </div>
//     </div>

//   )
// }

// export default App







import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
