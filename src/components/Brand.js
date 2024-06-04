import { brand } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./../main.css";

const NextArrow = (props) => {
  const { className, onClick, slideCount, ...rest } = props; // Destructure and remove slideCount
  return (
    <div {...rest} className={`${className} slick-arrow next-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick, slideCount, ...rest } = props; // Destructure and remove slideCount
  return (
    <div {...rest} className={`${className} slick-arrow prev-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white m-10 text-center overflow-hidden">
      <div className="m-10 overflow-hidden text-center relative">
        <Slider {...settings}>
          {brand.map((val, index) => (
            <div key={index}>
              <div className="max-w-xs m-4">
                <img
                  src={val.brand}
                  alt={val.category}
                  className="mx-auto opacity-50 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
