import React from "react";
import "../ViewProduct/ViewProduct.css";
import { FaRegHeart } from "react-icons/fa6";
import { FiRefreshCcw } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTruck } from "react-icons/fa6";
import { HiRefresh } from "react-icons/hi";
import { useSelector,useDispatch } from "react-redux";
import electronicsData from '../../DataFolder/DataFile'
import { useParams } from "react-router-dom";



const ViewProduct = () => {
  const {id} = useParams()
  const allproducts = Object.values(electronicsData).flat();
  const product = allproducts.find((item)=>item.id===parseInt(id));
  const cartItems = useSelector(state=>state.cart.cartItems);
  const dispatch = useDispatch()
  return (
    <>
      <div className="whole-cp">
        <div className="sub-cp">
          <div className="cp-img">
            <div className="cp-big-img">
              <img src={product.image} alt="" />
            </div>
            <div className="cp-sub-img">
              <div className="sub-img">
                <img src={product.image} alt="" />
              </div>
              <div className="sub-img">
                <img src={product.image2} alt="" />
              </div>
            </div>
          </div>
          <div className="cp-img-details">
            <div className="cp-details">
              <p className="cp-name">{product.name}</p>
              <p className="cp-price">$. {product.price}</p>
              <p className="cp-disc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus velit magnam quaerat placeat nesciunt, quo nemo.
                Distinctio laborum sit totam dolorum quo voluptates quod error!
                Nobis voluptatem perspiciatis, corporis velit, quas atque error
                eum tempore ratione alias rem sit temporibus excepturi dicta!
                Quasi impedit, ratione quae sapiente veritatis corporis
                suscipit?
              </p>
            </div>
            <div className="size-color-qty">
              <div className="cp-size">
                <span className="label">Size</span>
                <button className="size-option">S</button>
                <button className="size-option">M</button>
                <button className="size-option">L</button>
              </div>
              <div className="cp-color">
                <span className="label">Color</span>
                <button
                  className="color-box"
                  style={{ backgroundColor: "green" }}
                ></button>
                <button
                  className="color-box"
                  style={{ backgroundColor: "yellow" }}
                ></button>
              </div>
              <div className="cp-qty">
                <span className="label">Quantity</span>
                <button className="cp-dec">-</button>
                <lable className="cp--qty">109</lable>
                <button className="cp-inc">+</button>
              </div>
            </div>
            <div className="cp-cart-stock">
              <div className="cp-cart-btn">
                <button className="cp-cart">ADD TO CART</button>
                <p>
                  <FaRegHeart />
                </p>
                <p>
                  <FiRefreshCcw />
                </p>
              </div>
              <div className="stock">
                <p>In Stock</p>
              </div>
            </div>
            <div className="security-delivery-return">
              <p><MdOutlineSecurity /><span className="span-details">Security policy (edit with module Customer reassurance)</span></p>
              <p><FaTruck /><span className="span-details" >Delivery policy (edit with module Customer reassurance)</span></p>
              <p><HiRefresh /><span className="span-details">Return policy (edit with module Customer reassurance)</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
