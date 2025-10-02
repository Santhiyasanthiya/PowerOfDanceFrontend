import React, { useEffect, useState, useRef } from "react";
import "./HomePage.css";


const slides = [
  {
    title: "POWER OF DANCE",
    description:
      "The Power of Dance is the language of the soul, where every movement tells a story words can never capture.",
    bg: "https://getwallpapers.com/wallpaper/full/3/c/7/943514-dance-background-images-1920x1080-for-macbook.jpg",
    image:
      "https://t4.ftcdn.net/jpg/06/20/20/01/360_F_620200186_bIF71nJdN8Ka2PPOMf7waWr1KzXZxJbf.jpg            ",
  },
  {
    title: "POWER OF DREAMS",
    description:
      "The Power of Dance transforms rhythm into emotion, turning every step into pure magic.",
    bg: "https://res.cloudinary.com/dk50cmtps/image/upload/v1758797866/WhatsApp_Image_2025-09-23_at_6.03.28_PM_tsob1e.jpg",

      image: "https://res.cloudinary.com/dk50cmtps/image/upload/v1758199428/pd-logo-design_853558-129-removebg-preview_sdmpyy.png"
  },
  {
    title: "POWER OF ENERGY",
    description:
      "The Power of Dance awakens the spirit, uniting body, mind, and heart in graceful harmony",
    bg: "https://res.cloudinary.com/dk50cmtps/image/upload/v1758200808/elegant-ballet-dancer-silk-dress-performing-gracefully-generated-by-ai_dihqax.jpg",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20240517/pngtree-the-silhouette-of-one-young-hip-hop-male-break-dancer-dancing-image_15793887.jpg",
  },
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const progressRef = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [current]);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.transform = "scaleX(0)";
      setTimeout(() => {
        progressRef.current.style.transition = "transform 5s linear";
        progressRef.current.style.transform = "scaleX(1)";
      }, 50);
    }
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const goToSlide = (index) => setCurrent(index);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <div className="pd_home_container container-fluid">
        <div className="pd_home_slideshow">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`pd_home_slide ${
                index === current ? "active" : index < current ? "prev" : "next"
              }`}
            >
              {/* Background hide 300px–800px */}
              {!(windowWidth >= 300 && windowWidth <= 800) && (
                <div
                  className="pd_home_slide_background"
                  style={{ backgroundImage: `url(${slide.bg})` }}
                ></div>
              )}

              <div className="pd_home_slide_content">
                <h2 className="pd_home_slide_title">{slide.title}</h2>
                <p className="pd_home_slide_description">{slide.description}</p>
              </div>

              <div className="pd_home_slide_image">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="pd_home_navigation d-flex justify-content-center">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`pd_home_nav_dot ${i === current ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            ></div>
          ))}
        </div>

    
      </div>
    </>
  );
};

export default HomePage;
