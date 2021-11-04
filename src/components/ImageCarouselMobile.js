import React, { useEffect, useRef, useState } from "react";


const ImageCarouselMobile = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const carouselItemsRef = useRef([]);
	const scrollToTop = useRef();
	const scrollRef = useRef();

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
			scrollToTop?.current?.scrollTo(0, 0);
      if (scrollRef?.current) {
        scrollRef?.current?.scrollIntoView({
          inline: "nearest",
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="mobile-wrapper p-5 bg-gray">
			<h2 ref={scrollRef}>Mobile Mockups:</h2>
				<div className="mobile-skin">
				<div className="mobile-skin-overlay" style={{backgroundImage: "url('/images/mobile.png')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}></div>
					<div className="mobile-viewport">
					 	<div className="mobile_screen">
							<div ref={scrollToTop} className="mobile-scroll-wrap">
								<div className="selected-image-mobile" style={{ backgroundImage: `url(${selectedImage?.url})`, height:`${selectedImage?.height}`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}/>
							</div>
						</div>
					</div>
			 </div>
			<div className="carousel mobile pt-5">
				<div className="carousel-images pb-5">
				{images &&
					images.map((mobileImages, idx) => (
					<div
						onClick={() => handleSelectedImageChange(idx)}
						style={{ backgroundImage: `url(${mobileImages.url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}
						key={mobileImages.id}
						className={`carousel-image mobile ${selectedImageIndex === idx && "carousel-image-selected"}`}
						ref={(el) => (carouselItemsRef.current[idx] = el)}
					/>
				))}
				</div>
			</div>
		</div>
	);
};

export default ImageCarouselMobile;

