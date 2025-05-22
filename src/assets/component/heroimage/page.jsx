import React, { useEffect, useRef } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function HeroImage() {

  const imageList = [
    "https://images.unsplash.com/photo-1612215327100-60fc5c4d7938?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1730291517538-3f91e4711098?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1626386699888-b8865823b279?w=600&auto=format&fit=crop&q=60"
  ];


  const containerRef = useRef(null);

  useEffect(() => {
    const boxes = containerRef.current.querySelectorAll(".Animation");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    boxes.forEach((box) => observer.observe(box));
    return () => boxes.forEach((box) => observer.unobserve(box));
  }, []);
  

  return (
    <div>
      <main ref={containerRef}>
        <div className="text">
          <div className="box-text">
            <h1 className="Animation slide-top">We make cloths</h1>
            <h1 className="Animation slide-top">that suit you</h1>
            <p className="Animation slide-top">
              Discover your ideal getaway with premium comfort, world-class service, and stunning views.
            </p>
            <div className="btn Animation zoom-in">Our Services</div>
          </div>
        </div>

        <div className="box-image">
            
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
            className="mySwiper"
          >
            {imageList.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt={`slide-${idx}`} className="slide-image" />
                <div className="overlay"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </div>
  );
}

export default HeroImage;
