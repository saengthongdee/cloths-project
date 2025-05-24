import React,{useRef,useEffect,useState}from "react";
import "./style.css";

function whyChoose() {

  const data_whychoose = [
    {
      title: "Tailored to Perfection",
      description:
        "Each garment is crafted with precision to ensure the perfect fit and flawless finish.",
    },
    {
      title: "Premium Quality Fabrics",
      description:
        "We use only carefully selected, high-grade fabrics to ensure lasting comfort and elegance.",
    },
    {
      title: "Personalized Design Consultation",
      description:
        "Work with our designers to create clothing that matches your personal taste and lifestyle.",
    },
    {
      title: "Experienced Craftsmanship",
      description:
        "Over 10 years of tailoring experience ensures every detail is meticulously handled.",
    },
    {
      title: "Fast Turnaround Time",
      description:
        "Receive your custom-made pieces quickly without compromising on quality.",
    },
    {
      title: "Affordable Luxury",
      description:
        "Enjoy custom clothing at a reasonable price — perfect for everyday wear or special events.",
    },
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
    <div ref={containerRef}>
      <div className="box-why">
        <h2>why Choose us</h2>
        {data_whychoose.map((items, index) => (
          <div className="bg-f">
            <div className="box-t Animation slide-up">
              <h4>{items.title}</h4>
              <p>{items.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default whyChoose;
