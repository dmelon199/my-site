
import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'INDEX', url: '/images/desktop/atlanta/atlanta-INDEX-desktop.jpg', height:'2581px' },
  { id: 2, name:'SRP', url: '/images/desktop/atlanta/atlanta-SRP-desktop.jpg', height:'3360px' },
  { id: 3, name:'VDP', url: '/images/desktop/atlanta/atlanta-VDP-desktop.jpg', height:'3125px' },
  { id: 4, name:'FINANCE', url: '/images/desktop/atlanta/atlanta-FINANCE-desktop.jpg', height:'2103px' },
  { id: 5, name:'LOCATIONS', url: '/images/desktop/atlanta/atlanta-LOCATIONS-desktop.jpg', height:'1923px' },
  { id: 6, name:'TRADE', url: '/images/desktop/atlanta/atlanta-TRADE-desktop.jpg', height:'1639px' },
]

const mobileImages = [
  { id: 1, name:'INDEX', url: '/images/mobile//atlanta/atlanta-INDEX-mobile.jpg', height:'4831px', mobileHeight: '3150px' },
  { id: 2, name:'SRP', url: '/images/mobile//atlanta/atlanta-SRP-mobile.jpg', height:'5487px', mobileHeight: '3558px' },
  { id: 3, name:'VDP', url: '/images/mobile//atlanta/atlanta-VDP-mobile.jpg', height:'3631px', mobileHeight: '2330px' },
  { id: 4, name:'FINANCE', url: '/images/mobile//atlanta/atlanta-FINANCE-mobile.jpg', height:'2645px', mobileHeight: '1715px' },
  { id: 5, name:'LOCATIONS', url: '/images/mobile//atlanta/atlanta-LOCATIONS-mobile.jpg', height:'4009px', mobileHeight: '2600px' },
  { id: 6, name:'TRADE', url: '/images/mobile//atlanta/atlanta-TRADE-mobile.jpg', height:'2812px', mobileHeight: '1830px' },
  
]


const Atlanta = () => {
  return (
    <div>
      <div className="body-content">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Atlanta Motorcars</h1>
        <ImageCarouselDesktop images={desktopImages} />
        <ImageCarouselMobile images={mobileImages} />
      </div>
    </div>
  )
}


export default Atlanta
