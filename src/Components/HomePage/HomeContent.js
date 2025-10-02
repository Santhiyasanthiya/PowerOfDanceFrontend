import React, { useEffect } from "react";
import "./HomeContent.css";
import { Fade } from "react-awesome-reveal";

const HomeContent = () => {

    useEffect(() => {
    const body = document.querySelector("#root");
    if (body) {
      body.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <section className="container my-5 pd_hoc_section">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-12 col-lg-6 pd_hoc_content">
          <Fade direction="right" duration={3000} >
            <p className="pd_hoc_paragraph">
              Whether you are a beginner looking for fun, a fitness enthusiast
              pushing limits, or a parent encouraging your child’s talents, our
              programs are designed to suit all ages. With expert trainers, a
              friendly environment, and a focus on personal growth, we ensure
              every student feels motivated and empowered.
            </p>
          </Fade>
        </div>

        {/* Right Video */}
        <div className="col-12 col-lg-6 pd_hoc_video_wrapper">
          <video
            className="pd_hoc_video"
            src="https://res.cloudinary.com/dk50cmtps/video/upload/v1758259789/Admission_Open_Join_our_vibrant_classes_for_Kids_Adults_Class_Time-_5-30_PM_6-30_PM_F_bq3ffa.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
