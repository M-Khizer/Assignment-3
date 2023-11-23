import React from 'react'

const Task2 = () => {
  
  const name = 'Khizer';
  const date = new Date()
    return (
    <div>
        <h1>{name}</h1>
        <p>{date.toLocaleDateString()}</p>
        <p>{date.toLocaleTimeString()}</p>

    </div>
  )
}

export default Task2