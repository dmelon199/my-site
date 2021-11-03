
import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'INDEX', url: '/images/desktop/sunwise/sunwise-INDEX.jpg', height:'979px' },
  { id: 2, name:'INDEX2', url: '/images/desktop/sunwise/sunwise-SERVICE.jpg', height:'979px' },
  { id: 3, name:'SRP', url: '/images/desktop/sunwise/sunwise-SERVICE-dropdown.jpg', height:'979px' },
  { id: 4, name:'VDP', url: '/images/desktop/sunwise/sunwise-SHOP.jpg', height:'979px' },
  { id: 5, name:'VDP', url: '/images/desktop/sunwise/sunwise-SHOP-dropdown.jpg', height:'979px' },
]

const mobileImages = [
    { id: 1, name:'INDEX', url: '/images/mobile/luther/luther-INDEX-mobile.jpg', height:'3734px' },
    { id: 2, name:'INDEX', url: '/images/mobile/luther/luther-INDEX-2-mobile.jpg', height:'3734px' },
    { id: 3, name:'SRP', url: '/images/mobile/luther/luther-SRP-mobile.jpg', height:'3931px' },
    { id: 4, name:'VDP', url: '/images/mobile/luther/luther-VDP-mobile.jpg', height:'2605px' },
]


const Sunwise = () => {
  return (
    <div>
      <div className="body-content">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Sunwise Automotive Group</h1>
        <ImageCarouselDesktop images={desktopImages} />
        <ImageCarouselMobile images={mobileImages} />
      </div>
    </div>
  )
}


export default Sunwise