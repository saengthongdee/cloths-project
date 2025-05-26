import React, { useEffect, useState, useRef } from "react";
import "./style.css";

function gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const boxes = containerRef.current.querySelectorAll(".gallery-image");

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
  
  const galleryImages = [
    "https://plus.unsplash.com/premium_photo-1700495937567-d505f321f1a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob3AlMjBjbG90aHN8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/32251303/pexels-photo-32251303.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/32256828/pexels-photo-32256828.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/32255812/pexels-photo-32255812.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/32229424/pexels-photo-32229424.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/32252928/pexels-photo-32252928.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/32221347/pexels-photo-32221347.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/32256308/pexels-photo-32256308.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div>
      <div ref={containerRef} className="gallery">
        <h1>Gallery</h1>
        <div className="box-gallery">
          {galleryImages.map((items, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${items})`,
              }}
              className="gallery-image scale-up"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default gallery;
