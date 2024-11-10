import React from 'react'

import asset from './image/asset.jpg'
const Gambar = () => {
  return (
    <div className="w-72 h-72 sm:w-[400px] sm:h-[400px]  rounded-full overflow-hidden border-4 border-tertiary">
    <img
    src= {asset}
    alt=""
    className="object-cover w-full h-full"
      />
  </div>
  )
}

export default Gambar

