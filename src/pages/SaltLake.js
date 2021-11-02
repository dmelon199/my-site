
import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'INDEX', url: '/images/desktop/saltlake/saltlake-INDEX.jpg', height:'2572px' },
  { id: 1, name:'INDEX2', url: '/images/desktop/saltlake/saltlake-INDEX-2.jpg', height:'2406px' },
  { id: 3, name:'SRP', url: '/images/desktop/saltlake/saltlake-SRP.jpg', height:'1806px' },
  { id: 4, name:'VDP', url: '/images/desktop/saltlake/saltlake-VDP.jpg', height:'2182px' },
  { id: 5, name:'SHOWROOM', url: '/images/desktop/saltlake/saltlake-SHOWROOM.jpg', height:'1295px' },
  { id: 6, name:'SERVICE', url: '/images/desktop/saltlake/saltlake-SERVICE.jpg', height:'2540px' },
]

const mobileImages = [
    { id: 1, name:'INDEX', url: '/images/mobile/saltlake/saltlake-INDEX-mobile.jpg', height:'4354px' },
    { id: 1, name:'INDEX2', url: '/images/mobile/saltlake/saltlake-INDEX-mobile-2.jpg', height:'4326px' },
    { id: 3, name:'SRP', url: '/images/mobile/saltlake/saltlake-SRP-mobile.jpg', height:'3725px' },
    { id: 4, name:'VDP', url: '/images/mobile/saltlake/saltlake-VDP-mobile.jpg', height:'2226px' },
    { id: 5, name:'SHOWROOM', url: '/images/mobile/saltlake/saltlake-SHOWROOM-mobile.jpg', height:'1661px' },
    { id: 6, name:'SERVICE', url: '/images/mobile/saltlake/saltlake-SERVICE-mobile.jpg', height:'5281px' },
]


const SaltLake = () => {
  return (
    <div>
      <div className="body-content">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Salt Lake City Motorcars</h1>
        <ImageCarouselDesktop images={desktopImages} />
        <ImageCarouselMobile images={mobileImages} />
      </div>
    </div>
  )
}


export default SaltLake


