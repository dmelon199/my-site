
import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'INDEX', url: '/images/desktop/lamborghini/lamborghini-INDEX-1.jpg', height:'2532px' },
  { id: 2, name:'INDEX2', url: '/images/desktop/lamborghini/lamborghini-INDEX-2.jpg', height:'2928px' },
  { id: 3, name:'SRP', url: '/images/desktop/lamborghini/lamborghini-SRP-desktop.jpg', height:'3634px' },
  { id: 4, name:'VDP', url: '/images/desktop/lamborghini/lamborghini-VDP-desktop.jpg', height:'3200px' },
]

const mobileImages = [
  { id: 1, name:'INDEX', url: '/images/mobile/lamborghini/lamborghini-INDEX-mobile-1.jpg', height:'3709px', mobileHeight: '2400px' },
  { id: 2, name:'INDEX2', url: '/images/mobile/lamborghini/lamborghini-INDEX-mobile-2.jpg', height:'3981px', mobileHeight: '2580px' },
  { id: 3, name:'SRP', url: '/images/mobile/lamborghini/lamborghini-SRP-mobile.jpg', height:'4958px', mobileHeight: '3230px' },
  { id: 4, name:'VDP', url: '/images/mobile/lamborghini/lamborghini-VDP-mobile.jpg', height:'2777px', mobileHeight: '1800px' },
]


const Lamborghini = () => {
  return (
    <div>
      <div className="body-content">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Lamborghini</h1>
        <ImageCarouselDesktop images={desktopImages} />
        <ImageCarouselMobile images={mobileImages} />
      </div>
    </div>
  )
}


export default Lamborghini
