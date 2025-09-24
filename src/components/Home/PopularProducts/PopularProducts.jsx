import React from "react";
import "../PopularProducts/PopularProducts.css";
import { IoIosStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { addToCart } from "../../../CartSlice/CartSlice";
import { useDispatch } from "react-redux";
import { easeOut, motion } from "framer-motion";
import electronicsData from "../../DataFolder/DataFile";
import { Link } from "react-router-dom";
const PopularProducts = () => {
  const dispatch = useDispatch();

  const filtered2 = electronicsData.filter((data) => data.type === "popular");
  const filtered3 = electronicsData.filter((data) => data.type === "arrivals");

  return (
    <>
      <motion.div
        className="wholecat3"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="subcat3">
          <div className="dealhead3">
            <p className="dealtext3">Today's Popular Picks</p>
          </div>
          <div className="productparent3">
            {filtered2.map((data3) => (
              <div className="productcard3" key={data3.id}>
                <div className="cardimg3">
                  <Link to={`/viewproduct/${data3.id}`} key={data3.id}>
                    <img src={data3.image} alt="" className="cardimage13" />
                    <img src={data3.image2} alt="" className="cardimage23" />
                  </Link>
                  <div className="overlay-icons1">
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
                      className="addcart-btn"
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: data3.id,
                            name: data3.name,
                            price: data3.price,
                            image: data3.image,
                          })
                        );
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <Link
                  to={`/viewproduct/${data3.id}`}
                  key={data3.id}
                  className="card-details3"
                >
                  <p className="prodname3">{data3.name}</p>
                  <p className="prodprice3">{data3.price}</p>
                  <p className="star">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="supersales"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="insale">
          <p className="supersale-text">Super Sale</p>
          <p className="reddesigm">K82FS8</p>
          <p className="discount20">-20% Discount for first purchse</p>
          <div className="disbutton">
            <button className="discover">Discover</button>
          </div>
        </div>
      </motion.div>

      {/* <div className="headarrival">
        <div className="subarrival">
          <div className="Featuredproducts">Featured products</div>
          <div className="textArrivals">New Arrivals</div>
          <div className="love">Maybe you will love</div>
        </div>
      </div> */}
<br />
<br />
      <motion.div
        className="newarrivals"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="subnewarrivals">
          <div className="arrivalparent">
            {filtered3.map((data4) => (
              <div className="arrivalcard" key={data4.id}>
                <Link
                  to={`/viewproduct/${data4.id}`}
                  key={data4.id}
                  className="arrivalimg"
                >
                  <img src={data4.image} alt="" className="arrimg1" />
                  <img src={data4.image2} alt="" className="arrimg2" />
                </Link>
                <section className="arrdetails">
                  <Link
                    to={`/viewproduct/${data4.id}`}
                    key={data4.id}
                    className="prodnames"
                  >
                    <p>{data4.name}</p>
                  </Link>
                  <div className="price-cart">
                    <p className="prodprice5">{data4.price} </p>
                    <p className="heart-icon"><CiHeart /></p>
                    <p
                      className="cartlogo"
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: data4.id,
                            name: data4.name,
                            price: data4.price,
                            image: data4.image,
                          })
                        );
                      }}
                    >
                      <BsHandbag />
                    </p>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PopularProducts;


