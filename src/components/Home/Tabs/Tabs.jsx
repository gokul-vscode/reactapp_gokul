import React from "react";
import { useState } from "react";
import "../Tabs/Tabs.css";
import { BsCart2 } from "react-icons/bs";
import { addToCart } from "../../../CartSlice/CartSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import electronicsData from "../../DataFolder/DataFile";
import { CiHeart } from "react-icons/ci";
const Tabs = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("featured");

  const filtered4 = electronicsData.filter((data) => data.type === "tab1");
  const filtered5 = electronicsData.filter((data) => data.type === "tab2");
  const filtered6 = electronicsData.filter((data) => data.type === "tab3");

  const renderContent = () => {
    switch (activeTab) {
      case "featured":
        return (
          <motion.div
            className="tab1"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="subnewarrivals1">
              <div className="arrivalparent1">
                {filtered4.map((data5) => {
                  return (
                    <div className="arrivalcard1" key={data5.id}>
                      <Link
                        to={`/viewproduct/${data5.id}`}
                        key={data5.id}
                        className="arrivalimg1"
                      >
                        <img src={data5.image} alt="" className="arrimg11" />
                        <img src={data5.image2} alt="" className="arrimg21" />
                      </Link>
                      <section className="arrdetails1">
                        <Link
                          to={`/viewproduct/${data5.id}`}
                          key={data5.id}
                          className="prodnames1"
                        >
                          <p>{data5.name}</p>
                        </Link>
                        <div className="price-cart1">
                          <p className="prodprice1">{data5.price}</p>
                          <p className="heart-icon"><CiHeart /></p>
                          <p
                            className="logo-cart"
                            onClick={() => {
                              dispatch(
                                addToCart({
                                  id: data5.id,
                                  name: data5.name,
                                  price: data5.price,
                                  image: data5.image,
                                })
                              );
                            }}
                          >
                            <BsCart2 />
                          </p>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );
      case "arrivals":
        return (
          <motion.div
            className="tab1"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="subnewarrivals1">
              <div className="arrivalparent1">
                {filtered5.map((data5) => {
                  return (
                    <div className="arrivalcard1" key={data5.id}>
                      <Link
                          to={`/viewproduct/${data5.id}`}
                          key={data5.id} className="arrivalimg1">
                        <img src={data5.image} alt="" className="arrimg11" />
                        <img src={data5.image2} alt="" className="arrimg21" />
                      </Link>
                      <section className="arrdetails1">
                        <Link
                          to={`/viewproduct/${data5.id}`}
                          key={data5.id} className="prodnames1">
                          <p>{data5.name}</p>
                        </Link>
                        <div className="price-cart1">
                          <p className="prodprice1">{data5.price}</p>
                          <p className="heart-icon"><CiHeart /></p>
                          <p
                            className="logo-cart"
                            onClick={() => {
                              dispatch(
                                addToCart({
                                  id: data5.id,
                                  name: data5.name,
                                  price: data5.price,
                                  image: data5.image,
                                })
                              );
                            }}
                          >
                            <BsCart2 />
                          </p>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );

      case "love":
        return (
          <div
            className="tab1"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="subnewarrivals1">
              <div className="arrivalparent1">
                {filtered6.map((data5) => {
                  return (
                    <div className="arrivalcard1" key={data5.id}>
                      <Link
                          to={`/viewproduct/${data5.id}`}
                          key={data5.id}  className="arrivalimg1">
                        <img src={data5.image} alt="" className="arrimg11" />
                        <img src={data5.image2} alt="" className="arrimg21" />
                      </Link>
                      <section className="arrdetails1">
                        <Link
                          to={`/viewproduct/${data5.id}`}
                          key={data5.id} className="prodnames1">
                          <p>{data5.name}</p>
                        </Link>
                        <div className="price-cart1">
                          <p className="prodprice1">{data5.price}</p>
                          <p className="heart-icon"><CiHeart /></p>
                          <p
                            className="logo-cart"
                            onClick={() => {
                              dispatch(
                                addToCart({
                                  id: data5.id,
                                  name: data5.name,
                                  price: data5.price,
                                  image: data5.image,
                                })
                              );
                            }}
                          >
                            <BsCart2 />
                          </p>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="headarrival1">
        <div className="subarrival1">
          <div
            className={`Featuredproducts ${
              activeTab === "featured" ? "active" : ""
            }`}
            onClick={() => setActiveTab("featured")}
          >
            <p>Smart Gadgets</p>
          </div>
          <div
            className={`textArrivals ${
              activeTab === "arrivals" ? "active" : ""
            }`}
            onClick={() => setActiveTab("arrivals")}
          >
            <p>Home Appliances</p>
          </div>
          <div
            className={`love ${activeTab === "love" ? "active" : ""}`}
            onClick={() => setActiveTab("love")}
          >
            <p>Audio Equipments</p>
          </div>
        </div>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </>
  );
};

export default Tabs;


