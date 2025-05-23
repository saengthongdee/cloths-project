import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  return (
    <div>
      <aside>
        <div ref={boxRef} className="text">
          <h1>{service_data[index].text}</h1>
          <p>{service_data[index].description}</p>
        </div>

        <div className="image-swiper">
          <div
            style={{
              backgroundImage: `url(${service_data[index].image})`,
            }}
            className="slide-image"
          ></div>
        </div>
      </aside>
    </div>
  );
}

export default Service;
