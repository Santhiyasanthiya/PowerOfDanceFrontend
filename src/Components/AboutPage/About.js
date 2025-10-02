import React, { useEffect } from "react";
import "./About.css";
import { Fade } from "react-awesome-reveal";

const About = () => {
    useEffect(() => {
    const body = document.querySelector("#root");
    if (body) {
      body.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div className="container pd_about_pg_container py-5">
      <div className="row align-items-center">
        {/* Left - Founder Image */}
        <div className="col-lg-6 text-center pd_about_pg_img_wrap">
          <Fade direction="left" duration={1400}>
            <img
              src="https://res.cloudinary.com/dk50cmtps/image/upload/v1758799087/WhatsApp_Image_2025-09-23_at_6.18.50_PM_1_jubbhz.jpg"
              alt="Founder"
              className="img-fluid rounded shadow pd_about_pg_img"
            />
          </Fade>
          <h5 className="mt-3 pd_about_pg_img_title">
            Founder:Darmalingam
          </h5>
        </div>

        {/* Right - Motivational Content */}
        <div className="col-lg-6 pd_about_pg_content">
          <h2 className="fw-bold mb-3 pd_about_pg_title">
            A Legacy of Passion & Dreams
          </h2>
          <p className="pd_about_pg_text">
            Power of Dreams Dance & Fitness Studio was built on the vision of
            our beloved founder, whose passion for dance continues to inspire
            every step we take. His journey reminds us that true art lives
            forever — in the rhythm of movement and in the hearts he touched.
          </p>
          <p className="pd_about_pg_text">
            He believed that dance is not just about performance, but about
            confidence, discipline, and joy. Through every beat, he instilled
            the spirit of dedication and the power of dreams.
          </p>
          <p className="pd_about_pg_text">
            Though he is no longer with us, his dream continues to guide us,
            shaping a space where passion meets perseverance, and where every
            dancer discovers their true potential.
          </p>
          <p className="fw-bold pd_about_pg_quote">
            "Dance is the language of the soul — let your dreams move with
            every step."
          </p>
        </div>
      </div>
      <br/> 
        <br/> 
          <br/> 

            <br/> 
              <br/> 
                <br/> 
                  <br/> 

                    <br/> 
                      <br/> 

                        <br/> 
                          <br/> 
    </div>
  );
};

export default About;
