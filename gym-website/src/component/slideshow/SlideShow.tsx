import { useEffect, useState } from "react";
import "./SlideShow.css";
import slide1 from "../../assets/images/1.jpeg";
import slide2 from "../../assets/images/2.webp";
import slide3 from "../../assets/images/3.jpg";

const SlideShow = () => {
  /* array el slides  */

  const slides = [slide1, slide2, slide3];

  /* to keep track of the current slideshow */

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    // console.log("nextSlide");
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return  ()=>clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      >
      </div>
    </div>
  );
};

export default SlideShow;
