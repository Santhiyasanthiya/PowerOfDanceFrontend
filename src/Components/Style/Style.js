import React, { useEffect } from "react";
import "./StylePage.css";

const styles = [
  {
    title: "Dance",
    img: "https://img.freepik.com/premium-vector/couple-dancing-foxtrot-vector-green-neon-illustration_141155-1407.jpg?w=360",
    desc: "Learn classical and modern dance forms with rhythm and grace.",
  },
  {
    title: "Zumba",
    img: "https://res.cloudinary.com/dk50cmtps/image/upload/v1759409226/Screenshot_2025-10-02_181611_hcagqh.png",
    desc: "A fun, high-energy fitness class with Latin-inspired moves.",
  },
  {
    title: "CrossFit",
    img: "https://www.shutterstock.com/image-photo/young-dancers-training-studio-600nw-600546725.jpg",
    desc: "Strength training and endurance workouts for all levels.",
  },
  {
    title: "Drawing",
    img: "https://static.vecteezy.com/ti/vettori-gratis/p1/44577986-ag-abdul-kalam-anche-conosciuto-come-dott-apj-abdul-kalam-era-un-eminente-indiano-scienziato-e-il-11-presidente-di-india-gratuito-vettoriale.jpg",
    desc: "Explore creativity with sketching, painting and fine arts.",
  },
  {
    title: "Karate",
    img: "https://premiermartialarts.com/wp-content/uploads/2022/08/iStock-506157349-scaled-1.jpg.webp",
    desc: "Learn martial arts discipline, defense, and focus.",
  },
];


  



const Style = () => {
    useEffect(() => {
    const body = document.querySelector("#root");
    if (body) {
      body.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <section className="pd_class_timeline_section py-5">
      <h2 className="pd_class_heading text-center mb-5">Our Styles</h2>
      <div className="pd_class_timeline">
        {styles.map((item, index) => (
          <div
            key={index}
            className={`pd_class_timeline_item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="pd_class_content shadow">
              <img src={item.img} alt={item.title} className="pd_class_img" />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Style;
