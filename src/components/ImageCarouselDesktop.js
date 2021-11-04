import React, { useEffect, useRef, useState } from "react";
import Scroll from '../components/Scroll';


const ImageCarouselDesktop = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(1);
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
    <div className="desktop-wrapper p-5">
      <h2 ref={scrollRef} className="pb-3">Desktop Mockups:</h2>
        <div className="desktop-skin">
          <div className="skin-overlay" style={{backgroundImage: "url('/images/desktop.png')", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}></div>
          <div className="viewport">
            <div className="desktop_screen">
              <div ref={scrollToTop} className="scroll-wrap">
                <div className="selected-image-desktop" style={{ backgroundImage: `url(${selectedImage?.url})`, height:`${selectedImage?.height}`, backgroundPosition: 'center top' }}/>
              </div>
            </div>
          </div>
        </div>
      <div className="carousel desktop pt-5">
        <div className="carousel-images pb-3">
          <Scroll />
          {images &&
            images.map((desktopImages, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${desktopImages.url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}
                key={desktopImages.id}
                className={`carousel-image desktop ${selectedImageIndex === idx && "carousel-image-selected"}`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselDesktop;