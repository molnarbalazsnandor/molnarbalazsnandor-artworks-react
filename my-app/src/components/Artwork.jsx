import React from 'react'

function Artwork({artData}) {
  return (
    <div>
      <h1>{artData.title}</h1>
      <h2>{artData.creditline}</h2>
      <h3>{artData.dated}</h3>
      <img src={artData.primaryimageurl} alt={artData.title} />
    </div>
  )
}

export default Artwork