import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { gsap } from "gsap";

// ✅ เพิ่มตรงนี้
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

function Service() {
  const service_data = [
    {
      id: 1,
      text: "Custom Clothing Design",
      description:
        "We offer personalized clothing design services where every piece is crafted to match your individual taste...",
      image:
        "https://cdn.pixabay.com/photo/2025/05/13/07/41/architecture-9596799_1280.jpg",
    },
    {
      id: 2,
      text: "Made-to-Order Tailoring",
      description:
        "Our made-to-order tailoring service allows you to create high-quality clothing that fits perfectly...",
      image:
        "https://cdn.pixabay.com/photo/2022/01/01/16/29/antelope-6908215_1280.jpg",
    },
    {
      id: 3,
      text: "Alteration and Restyling",
      description:
        "We provide expert alteration and restyling services to help you achieve the perfect fit or breathe new life...",
      image:
        "https://cdn.pixabay.com/photo/2025/01/01/14/48/bird-9303900_1280.jpg",
    },
    {
      id: 4,
      text: "Fashion Consultation",
      description:
        "Our fashion consultation service helps you discover what works best for your body type, lifestyle...",
      image:
        "https://cdn.pixabay.com/photo/2025/02/12/10/55/cat-9401282_1280.jpg",
    },
    {
      id: 5,
      text: "Group & Corporate Orders",
      description:
        "We handle custom apparel for groups, events, and corporate needs. From team uniforms and branded T-shirts...",
      image:
        "https://cdn.pixabay.com/photo/2022/12/02/22/21/blueberries-7631751_1280.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const boxRef = useRef(null);
  const swiperRef = useRef(null);

  // 🔁 หมุน index ทุก 4 วิ
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % service_data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🧠 ใช้ GSAP Animate Text
  useEffect(() => {
    const el = boxRef.current;
    const tl = gsap.timeline();

    tl.fromTo(
      el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .to(el, { opacity: 1, duration: 2.5 })
      .to(el, { opacity: 0, y: -20, duration: 1, ease: "power2.in" });

    return () => tl.kill();
  }, [index]);

  // 🌀 Sync Swiper กับ index
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); // ใช้กับ loop
    }
  }, [index]);

  return (
    <div>
      <aside>
        <div ref={boxRef} className="text">
          <h1>{service_data[index].text}</h1>
          <p>{service_data[index].description}</p>
        </div>

        <div className="image-swiper">
          <Swiper
            modules={[EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            onSlideChange={(swiper) => setIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
          >
            {service_data.map((item, i) => (
              <SwiperSlide key={i}>
                <img src={item.image} alt={item.text} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </aside>
    </div>
  );
}

export default Service;
