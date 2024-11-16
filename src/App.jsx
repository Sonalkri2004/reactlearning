import React from 'react'
import Card from './components/Card'

const App = () => {

 const users=[
  {
    "name": "Alice Johnson",
    "age": 28,
    "city": "New York",
    "profession": "Software Engineer"
  },
  {
    "name": "Rahul Sharma",
    "age": 32,
    "city": "Mumbai",
    "profession": "Data Analyst"
  },
  {
    "name": "Emily Davis",
    "age": 24,
    "city": "London",
    "profession": "Graphic Designer"
  },
  {
    "name": "Hiroshi Tanaka",
    "age": 45,
    "city": "Tokyo",
    "profession": "Marketing Manager"
  },
  {
    "name": "Fatima Khalid",
    "age": 30,
    "city": "Dubai",
    "profession": "Architect"
  }
]

  return (
    <div className='p-10'>
      {users.map((elem)=>{
        return <Card user={elem.name} city={elem.city} age={elem.age} profession={elem.profession} />
      })}
    </div>
  )
}

export default App