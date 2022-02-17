
import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'SPLASH1', url: '/images/desktop/splash/splash1.jpg', height:'1679px' },
  { id: 2, name:'SPLASH2', url: '/images/desktop/splash/splash2.jpg', height:'2195px' },
  { id: 3, name:'SPLASH3', url: '/images/desktop/splash/splash3.jpg', height:'1226px' },
]

const mobileImages = [
    { id: 1, name:'SPLASH1', url: '/images/mobile/splash/splash1-mobile.jpg', height:'5582px', mobileHeight:'3625px' },
    { id: 2, name:'SPLASH2', url: '/images/mobile/splash/splash2-mobile.jpg', height:'6056px', mobileHeight:'3945px' },
    { id: 3, name:'SPLASH3', url: '/images/mobile/splash/splash3-mobile.jpg', height:'2427px', mobileHeight:'1600px' },
]


const Splash = () => {
  return (
    <div>
      <div className="body-content">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Splash Page Designs</h1>
        <ImageCarouselDesktop images={desktopImages} />
        <ImageCarouselMobile images={mobileImages} />
      </div>
    </div>
  )
}


export default Splash


