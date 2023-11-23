import React, { useState } from 'react'

const Task3 = () => {

    const [time,setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);
    
    return (
    <div>
        <h1>{time}</h1>
    </div>
  )
}

export default Task3