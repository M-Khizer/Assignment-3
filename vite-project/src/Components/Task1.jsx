import React from 'react'

const Task1 = () => {
    const hours = new Date().getHours()
  return (
    <div>
        {hours >= 1 && hours <= 11 && <h1>Hello sir,Good Morning</h1>}
        {hours >= 12 && hours <= 19 && <h1>Hello sir,Good Afternoon</h1>}
        {hours >= 20 && hours <= 24 && <h1>Hello sir,Good Night</h1>}

    </div>
  )
}

export default Task1