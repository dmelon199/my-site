
import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'INDEX', url: '/images/desktop/lithia/lithia-index.jpg', height:'3152px' },
  { id: 2, name:'INDEX2', url: '/images/desktop/lithia/lithia-index-2.jpg', height:'2833px' },
  { id: 3, name:'SRP', url: '/images/desktop/lithia/lithia-srp.jpg', height:'3102px' },
  { id: 4, name:'VDP', url: '/images/desktop/lithia/lithia-vdp.jpg', height:'2574px' },
]

const mobileImages = [
  { id: 1, name:'INDEX', url: '/images/mobile//lithia/lithia-INDEX-mobile-1.jpg', height:'6674px' },
  { id: 2, name:'INDEX', url: '/images/mobile//lithia/lithia-INDEX-mobile-2.jpg', height:'5992px' },
  { id: 3, name:'SRP', url: '/images/mobile//lithia/lithia-SRP-mobile.jpg', height:'5481px' },
  { id: 4, name:'VDP', url: '/images/mobile//lithia/lithia-VDP-mobile.jpg', height:'2635px' },
]


const Lithia = () => {
  return (
    <div>
      <div className="body-content">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Lithia Motors</h1>
        <ImageCarouselDesktop images={desktopImages} />
        <ImageCarouselMobile images={mobileImages} />
      </div>
    </div>
  )
}


export default Lithia
