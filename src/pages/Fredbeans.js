import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'INDEX', url: '/images/desktop/fredbeans/fredbeans-INDEX.jpg', height:'4162px' },
  { id: 2, name:'INDEX2', url: '/images/desktop/fredbeans/fredbeans-INDEX-2.jpg', height:'3956px' },
  { id: 3, name:'SRP', url: '/images/desktop/fredbeans/fredbeans-SRP.jpg', height:'2237px' },
  { id: 4, name:'VDP', url: '/images/desktop/fredbeans/fredbeans-VDP.jpg', height:'2435px' },
  { id: 5, name:'SERVICE', url: '/images/desktop/fredbeans/fredbeans-SERVICE.jpg', height:'3344px' },
  { id: 6, name:'CAREERS', url: '/images/desktop/fredbeans/fredbeans-CAREERS.jpg', height:'3195px' },
]

const mobileImages = [
    { id: 1, name:'INDEX', url: '/images/mobile/fredbeans/fredbeans-INDEX-mobile.jpg', height:'7989px' },
    { id: 2, name:'INDEX2', url: '/images/mobile/fredbeans/fredbeans-INDEX-2-mobile.jpg', height:'5323px' },
    { id: 3, name:'SRP', url: '/images/mobile/fredbeans/fredbeans-SRP-mobile.jpg', height:'4343px' },
    { id: 4, name:'VDP', url: '/images/mobile/fredbeans/fredbeans-VDP-mobile.jpg', height:'2727px' },
    { id: 5, name:'SERVICE', url: '/images/mobile/fredbeans/fredbeans-SERVICE-mobile.jpg', height:'4150px' },
    { id: 6, name:'CAREERS', url: '/images/mobile/fredbeans/fredbeans-CAREERS-mobile.jpg', height:'3649px' },
]


const Fredbeans = () => {
  return (
    <div>
      <div className="body-content">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Fred Beans Family of Dealerships</h1>
        <ImageCarouselDesktop images={desktopImages} />
        <ImageCarouselMobile images={mobileImages} />
      </div>
    </div>
  )
}


export default Fredbeans
