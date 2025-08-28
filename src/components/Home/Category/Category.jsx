import React from "react";
import "../Category/Category.css";
import electronic from "../../../assets/cls-electronic1.jpg";
import appliances from "../../../assets/cls-electronic2.jpg";
import kitchen from "../../../assets/cls-electronic3.jpg";
import audio from "../../../assets/cls-electronic4.jpg";
import smarthome from "../../../assets/cls-electronic5.jpg";
import game from "../../../assets/cls-electronic6.jpg";
import office from "../../../assets/cls-electronic7.jpg";
import { CiHeart } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import electronicsData from "../../DataFolder/DataFile";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../CartSlice/CartSlice";
import { Link } from "react-router-dom";

const Category = () => {
  const dispatch = useDispatch();

  // const handleAddToCart = (product)=>{
  //   dispatch(addToCart(product))
  // }

  const grid = [
    {
      id: 1,
      name: "Electronics",
      image: electronic,
    },
    {
      id: 2,
      name: "Home Appliances",
      image: appliances,
    },
    {
      id: 3,
      name: "Kitchen Devices",
      image: kitchen,
    },
    {
      id: 4,
      name: "Audio Equipment",
      image: audio,
    },
    {
      id: 5,
      name: "Smart Home",
      image: smarthome,
    },
    {
      id: 6,
      name: "Gaming",
      image: game,
    },
    {
      id: 7,
      name: "Office Equipment",
      image: office,
    },
  ];

  const filtered = electronicsData.filter((data) => data.type === "deal");
  const filtered1 = electronicsData.filter((data) => data.type === "banners");

  return (
    <>
      <motion.div
        className="wholecat2"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="wholecategory">
          <div className="subcaregory">
            <h1 className="cathaed">Popular Categories</h1>
            <div className="productparent">
              {grid.map((data) => (
                <div className="productcard" key={data.id}>
                  <img src={data.image} alt="" className="productImg" />
                  <p className="catname">{data.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="wholecat2"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="subcat2">
          <div className="dealhead">
            <p className="dealtext">Deal of the day</p>
          </div>
          <div className="productparent2">
            {filtered.map((data1) => (
              <div className="productcard2">
                <div className="cardimg">
                    <img src={data1.image} alt="" className="cardimage1" />
                    <img src={data1.image2} alt="" className="cardimage2" />
                  <div className="overlay-icons">
                    <p>
                      <CiHeart />
                    </p>
                    <p>
                      <FaRegShareFromSquare />
                    </p>
                    <p>
                      <IoEyeOutline />
                    </p>
                  </div>
                  <div className="addcart">
                    <button
                      className="addcart-btns"
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: data1.id,
                            name: data1.name,
                            price: data1.price,
                            image: data1.image,
                          })
                        );
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <Link to={`/viewproduct/${data1.id}`} key={data1.id} className="card-details">
                  <p className="prodname">{data1.name}</p>
                  <p className="prodprice">${data1.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="wholebanner"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="subbanner">
          <div className="bannerparent">
            {filtered1.map((data2) => (
              <div className="bannercard" key={data2.id}>
                <img src={data2.image} alt="" className="bannerimg" />
                <div className="bannercontent">
                  <h1 className="bannerhead">{data2.name}</h1>
                  <p className="bannertext">{data2.content}</p>
                  <p className="bannershop">{data2.shop}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Category;
