import React from 'react'

const Card = props => {
  const { card } = props
  return (
    <div className={`card`}>
      <p>{card}</p>
    </div>
  )
}

export default Card
