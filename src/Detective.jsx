import React, { useState } from 'react'

export default function Detective() {

  const [sherlock, setSherlock] = useState("психопат")


  const handleClick = () => {
    setSherlock( "высокоактивный социопат")
  }

  return (
    <div>
        <h1>
          Шерлок - {sherlock}
        </h1>
        <button onClick={handleClick}>Узнать правду</button>
    </div>
  )
}
