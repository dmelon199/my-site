
import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'INDEX', url: '/images/desktop/luther/luther-INDEX.jpg', height:'2902px' },
  { id: 2, name:'INDEX2', url: '/images/desktop/luther/luther-INDEX-2.jpg', height:'2902px' },
  { id: 3, name:'SRP', url: '/images/desktop/luther/luther-SRP.jpg', height:'2308px' },
  { id: 4, name:'VDP', url: '/images/desktop/luther/luther-VDP.jpg', height:'3306px' },
]

const mobileImages = [
    { id: 1, name:'INDEX', url: '/images/mobile/luther/luther-INDEX-mobile.jpg', height:'3734px' },
    { id: 2, name:'INDEX', url: '/images/mobile/luther/luther-INDEX-2-mobile.jpg', height:'3734px' },
    { id: 3, name:'SRP', url: '/images/mobile/luther/luther-SRP-mobile.jpg', height:'3931px' },
    { id: 4, name:'VDP', url: '/images/mobile/luther/luther-VDP-mobile.jpg', height:'2605px' },
]


const Luther = () => {
  return (
    <div>
      <div className="body-content">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Luther Automotive</h1>
        <ImageCarouselDesktop images={desktopImages} />
        <ImageCarouselMobile images={mobileImages} />
      </div>
    </div>
  )
}


export default Luther