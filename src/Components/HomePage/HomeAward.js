import React, { useEffect } from "react";
import "./HomeAward.css";

const HomeAward = () => {

    useEffect(() => {
    const body = document.querySelector("#root");
    if (body) {
      body.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  const awards = [
    {
      id: 1,
      title: "Best Innovation",
      date: "Jan 2023",
      desc: "Recognized for outstanding innovation.",
      img: "https://res.cloudinary.com/dk50cmtps/image/upload/v1758267142/Screenshot_2025-09-19_130130_x4274f.png",
    },
    {
      id: 2,
      title: "Excellence Award",
      date: "Feb 2023",
      desc: "Awarded for excellence in performance.",
      img: "https://res.cloudinary.com/dk50cmtps/image/upload/v1758800271/WhatsApp_Image_2025-09-23_at_6.12.33_PM_wetyek.jpg",
    },
    {
      id: 3,
      title: "Top Performer",
      date: "Mar 2023",
      desc: "For being the top performer of the year.",
      img: "https://res.cloudinary.com/dk50cmtps/image/upload/v1759299641/WhatsApp_Image_2025-10-01_at_10.40.01_AM_cxl7dx.jpg",
    },
    {
      id: 4,
      title: "Leadership Award",
      date: "Apr 2023",
      desc: "Recognized for strong leadership skills.",
      img: "https://res.cloudinary.com/dk50cmtps/image/upload/v1759309317/WhatsApp_Image_2025-09-23_at_6.18.49_PM_ssfkuk.jpg",
    },
  ];

  return (
    <div className="pd_ho_award_container container">
      <h1 className="text-center pd_ho_title">AWARDS</h1>
      <div className="row">
        {awards.map((award) => (
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={award.id}>
            <div className="pd_ho_award_card">
              <img
                src={award.img}
                alt={award.title}
                className="pd_ho_award_img"
              />
              <div className="pd_ho_award_overlay">
                <h5>{award.title}</h5>
                <p><strong>{award.date}</strong></p>
                <p>{award.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAward;
