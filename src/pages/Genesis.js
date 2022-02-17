
import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'INDEX', url: '/images/desktop/genesis/genesis-INDEX.jpg', height:'1997px' },
]

const mobileImages = [
    { id: 1, name:'INDEX', url: '/images/mobile/genesis/genesis-INDEX-mobile.jpg', height:'1056px', mobileHeight:'689px' },
]


const Genesis = () => {
  return (
    <div>
      <div className="body-content">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Genesis Motors</h1>
        <ImageCarouselDesktop images={desktopImages} />
        <ImageCarouselMobile images={mobileImages} />
      </div>
    </div>
  )
}


export default Genesis


