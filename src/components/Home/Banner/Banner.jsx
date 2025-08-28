import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Banner/Banner.css";
import {motion} from "framer-motion"
import Banner1 from "../../../assets/slider-electronic.jpg";
import Banner2 from "../../../assets/slider-electronic2.jpg";
import Banner3 from "../../../assets/slider-electronic3.jpg";

const Banner = () => {
  const banners = [
    {
      id: 1,
      image: Banner1,
      offermsg: "SALE! UP TO 50% OFF !",
      dji: "Dji Panthom 3 Professional",
      description:
        "Metallic Press Stud  Fastening Baded detail.Festival Season ",
    },
    {
      id: 2,
      image: Banner2,
      offermsg: "SALE! UP TO 50% OFF !",
      dji: "Marshall Woburn White",
      description:
        "Metallic Press Stud  Fastening Baded detail.Festival Season ",
    },
    {
      id: 3,
      image: Banner3,
      offermsg: "SALE! UP TO 50% OFF !",
      dji: "Apple MagSafe for Iphone",
      description:
        "Metallic Press Stud  Fastening Baded detail.Festival Season ",
    },
  ];

  return (
    <>
      <div className="slide">
        <Swiper
          modules={[Navigation, Pagination, Autoplay,]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={1500}
        >
          {banners.map((data5) => (
            <SwiperSlide key={banners.id}>
              <div className="slideimg" key={data5.id}>
                <img src={data5.image} alt="banner" className="slide-image" />
                <motion.div
                  className="slideoffer"
                  initial={{ y: 100, Opacity: 0 }}
                  whileInView={{ y: 0, Opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="slide-content">
                    <p className="offermsg">{data5.offermsg}</p>
                    <h2 className="dji">{data5.dji}</h2>
                    <p className="description">{data5.description} </p>
                    <button className="shopnow">Shop Now</button>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
