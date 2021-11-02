
import React from "react"
import ImageCarouselDesktop from "../components/ImageCarouselDesktop"
import ImageCarouselMobile from "../components/ImageCarouselMobile"

const desktopImages = [
  { id: 1, name:'INDEX', url: '/images/desktop/avondale/avondale-INDEX.jpg', height:'3208px' },
  { id: 2, name:'GETTING-STARTED', url: '/images/desktop/avondale/avondale-GETTING-STARTED.jpg', height:'2059px' },
	{ id: 3, name:'MEMBERS', url: '/images/desktop/avondale/avondale-MEMBERS.jpg', height:'5436px' },
  { id: 4, name:'HOW-IT-WORKS', url: '/images/desktop/avondale/avondale-HOW-IT-WORKS.jpg', height:'2941px' },
  { id: 5, name:'PLUS', url: '/images/desktop/avondale/avondale-PLUS.jpg', height:'3246px' },
  { id: 6, name:'PREMIUM', url: '/images/desktop/avondale/avondale-PREMIUM.jpg', height:'4795px' },
  { id: 7, name:'PRIME', url: '/images/desktop/avondale/avondale-PRIME.jpg', height:'2940px' },
]

const mobileImages = [
	{ id: 1, name:'INDEX', url: '/images/mobile/avondale/avondale-INDEX-mobile.jpg', height:'4791px' },
	{ id: 2, name:'GETTING-STARTED', url: '/images/mobile/avondale/avondale-GETTING-STARTED-mobile.jpg', height:'3554px' },
	{ id: 3, name:'MEMBERS', url: '/images/mobile/avondale/avondale-MEMBERS-STORIES-mobile.jpg', height:'5436px' },
	{ id: 4, name:'HOW-IT-WORKS', url: '/images/mobile/avondale/avondale-HOW-IT-WORKS-mobile.jpg', height:'4850px' },
	{ id: 5, name:'PLUS', url: '/images/mobile/avondale/avondale-PLUS-mobile.jpg', height:'4486px' },
	{ id: 6, name:'PREMIUM', url: '/images/mobile/avondale/avondale-PREMIUM-mobile.jpg', height:'4683px' },
	{ id: 7, name:'PRIME', url: '/images/mobile/avondale/avondale-PRIME-mobile.jpg', height:'4177px' },
]


const Avondale = () => {
  return (
	<div>
	  <div className="body-content">
	  <h1 className="font-weight-bold bg-gray px-5 py-4">Avondale Select</h1>
			<ImageCarouselDesktop images={desktopImages} />
			<ImageCarouselMobile images={mobileImages} />
	  </div>
	</div>
  )
}


export default Avondale
