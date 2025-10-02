import React, { useEffect } from "react";
import "./Event.css";

const Event = () => {
    useEffect(() => {
    const body = document.querySelector("#root");
    if (body) {
      body.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <>
      <div className="pd_event_page">
        <br />
        <br />

        {/* Hero Section */}
        <section className="pd_event_hero">
          <div className="container text-center">
         
            <p className="pd_event_subtitle">
              Join us in celebrating art, culture, and talent with our grand events!
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="pd_event_upcoming container">
          <h2 className="pd_event_section_title">Event Highlights</h2>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="pd_event_card">
                <img
                  src="https://res.cloudinary.com/dk50cmtps/image/upload/v1758797866/WhatsApp_Image_2025-09-23_at_6.03.28_PM_tsob1e.jpg"
                  alt="Event 1"
                  className="pd_event_img"
                />
                <div className="pd_event_body">
                  <h5 className="pd_event_name">Annual Dance Festival</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pd_event_card">
                <img
                  src="https://res.cloudinary.com/dk50cmtps/image/upload/v1758800271/WhatsApp_Image_2025-09-23_at_6.12.32_PM_mixeyu.jpg"
                  alt="Event 2"
                  className="pd_event_img"
                />
                <div className="pd_event_body">
                  <h5 className="pd_event_name">Classical Night</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pd_event_card">
                <img
                  src="https://res.cloudinary.com/dk50cmtps/image/upload/v1758800270/WhatsApp_Image_2025-09-23_at_6.12.40_PM_yxotqi.jpg"
                  alt="Event 3"
                  className="pd_event_img"
                />
                <div className="pd_event_body">
                  <h5 className="pd_event_name">Fusion Dance Gala</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights / Gallery */}
        <section className="pd_event_gallery container">
          <h2 className="pd_event_section_title">Upcoming Events</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="pd_event_gallery_item">
                <img
                  src="https://www.shutterstock.com/image-vector/tango-night-vector-neon-background-260nw-417288145.jpg"
                  alt="highlight1"
                  className="pd_event_gallery_img"
                />
                <div className="pd_event_gallery_overlay">Coming Soon</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pd_event_gallery_item">
                <img
                  src="https://st2.depositphotos.com/2140915/11570/v/450/depositphotos_115707534-stock-illustration-breakdancer-doing-a-back-flip.jpg"
                  alt="highlight2"
                  className="pd_event_gallery_img"
                />
                <div className="pd_event_gallery_overlay">Coming Soon</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pd_event_gallery_item">
                <img
                  src="https://st2.depositphotos.com/2140915/10903/v/450/depositphotos_109035224-stock-illustration-cool-street-dancer-making-freeze.jpg"
                  alt="highlight3"
                  className="pd_event_gallery_img"
                />
                <div className="pd_event_gallery_overlay">Coming Soon</div>
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Event;
