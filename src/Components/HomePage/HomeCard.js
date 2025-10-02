import React, { useEffect, useState } from "react";
import "./HomeCard.css";

const HomeCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const body = document.querySelector("#root");
    if (body) {
      body.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  const cards = [
    {
      id: 1,
      // title: "Card One",
      video:
        "https://res.cloudinary.com/dk50cmtps/video/upload/v1758259789/Admission_Open_Join_our_vibrant_classes_for_Kids_Adults_Class_Time-_5-30_PM_6-30_PM_F_bq3ffa.mp4",
    },
    {
      id: 2,
      // title: "Card Two",
      video:
        "https://res.cloudinary.com/dk50cmtps/video/upload/v1759296565/Trending_reels_kanimaa_pd_power_of_dreamsz_pd_team_boy_s_trendingreels_music_dancer_d_wzf3js.mp4",
    },
    {
      id: 3,
      // title: "Card Three",
      video:
        "https://res.cloudinary.com/dk50cmtps/video/upload/v1759296565/Trending_reels_kanimaa_pd_power_of_dreamsz_pd_team_boy_s_trendingreels_music_dancer_d_wzf3js.mp4",
    },

  
  ];

  // Auto slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  // Slice 3 visible cards
  const visibleCards = [];
  for (let i = 0; i < 3; i++) {
    visibleCards.push(cards[(currentIndex + i) % cards.length]);
  }

  return (
    <div className="container pd_cr_container">
      <div className="row justify-content-center">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="col-lg-4 col-md-6 col-10 pd_cr_card_wrapper"
          >
            <div className="pd_cr_card">
              <video
                src={card.video}
                className="pd_cr_video"
                autoPlay
                muted
                loop
                playsInline
              />
              <h5 className="mt-3">{card.title}</h5>
              {/* <p>This is {card.title} description</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
