import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'INDEX', url: '/images/desktop/cartermyers/carter-INDEX.jpg', height:'2854px' },
  { id: 2, name:'SRP', url: '/images/desktop/cartermyers/carter-SRP.jpg', height:'2137px' },
  { id: 3, name:'VDP', url: '/images/desktop/cartermyers/carter-VDP.jpg', height:'2918px' },
  { id: 4, name:'COMMUNITY', url: '/images/desktop/cartermyers/carter-COMMUNITY.jpg', height:'4024px' },
  { id: 5, name:'CAREERS', url: '/images/desktop/cartermyers/carter-CAREERS.jpg', height:'2008px' },
]

const mobileImages = [
    { id: 1, name:'INDEX', url: '/images/mobile/cartermyers/carter-INDEX-mobile.jpg', height:'3734px' },
    { id: 2, name:'SRP', url: '/images/mobile/cartermyers/carter-SRP-mobile.jpg', height:'3931px' },
    { id: 3, name:'VDP', url: '/images/mobile/cartermyers/carter-VDP-mobile.jpg', height:'2605px' },
    { id: 4, name:'COMMUNITY', url: '/images/mobile/cartermyers/carter-COMMUNITY-mobile.jpg', height:'6257px' },
    { id: 5, name:'CAREER', url: '/images/mobile/cartermyers/carter-CAREER-mobile.jpg', height:'4156px' },
]


const Carter = () => {
  return (
    <div>
      <div className="body-content">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Carter Myers Automotive</h1>
        <ImageCarouselDesktop images={desktopImages} />
        <ImageCarouselMobile images={mobileImages} />
      </div>
    </div>
  )
}


export default Carter