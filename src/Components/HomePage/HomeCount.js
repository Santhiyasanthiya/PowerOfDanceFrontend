import React, { useEffect, useState } from "react";
import { FaUsers, FaChalkboardTeacher, FaStar } from "react-icons/fa";
import "./HomeCount.css";

const CountCard = ({ target, title, icon: Icon, color1, color2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animateCount = () => {
      let current = 0;
      const duration = 2000;
      const stepTime = 20;
      const increment = target / (duration / stepTime);

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
    };


 


    // first time run
    animateCount();

    // repeat every 10s
    const repeat = setInterval(() => {
      setCount(0); // reset
      animateCount();
    }, 10000);

    return () => clearInterval(repeat);
  }, [target]);
  return (
    <div
      className="pd_ho_count_card shadow"
      style={{
        background: `linear-gradient(135deg, ${color1}, ${color2})`,
      }}
    >
      <div className="pd_ho_count_icon">
        <Icon size={40} color="#fff" />
      </div>
      <h2 className="pd_ho_count_number">{count}+</h2>
      <p className="pd_ho_count_title">{title}</p>
    </div>
  );
};

const HomeCount = () => {
  return (
    <div className="container pd_ho_count_container text-center my-5">
      <h1 className="pd_ho_count_heading">Our Achievements</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <CountCard
            target={50}
            title="Total Reviews"
            icon={FaStar}
            color1="#034e06ff"
            color2="#c4fac7ff"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <CountCard
            target={100}
            title="Total Students"
            icon={FaUsers}
            color1="#ff8800ff"
            color2="#fcd8b6ff"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <CountCard
            target={5}
            title="Total Classes"
            icon={FaChalkboardTeacher}
               color1="#034e06ff"
            color2="#c4fac7ff"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCount;
