// import React from "react";
import React from "react";
import { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../assets/logo-white.svg";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { FaTrashCan } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux"
import { incrementQty,decrementQty,removeFromCart } from "../CartSlice/CartSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const CartComponent = () => {

  const [cartOpen,setCartOpen] = useState(false);
  const toggleCart = ()=>{
    setCartOpen(prev=>!prev)
  };
  const cartItems = useSelector(state=>state.cart.cartItems);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((acc,item)=>acc + item.price * item.quantity,0);
    // const cartItems = useSelector((state) => state.cart);
    // const totalCartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const [formOpen,setFormOpen]  = useState(false);
    const toggleForm = ()=>{
      setFormOpen(prev=>!prev)
    }

    const [isLogin,setLogin] = useState(true);
    const [form,setForm] = useState({eamil:'',password:''});

    const handleToggle =()=>{
      setLogin(!isLogin);
      setForm({email:'',password:''});
    }

    const handleChange  = (e)=>{
      const{name,value} = e.target;
      setForm((prev)=>({...prev,[name]:value}));
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(isLogin){
        console.log('Logging in with:',form);
        alert(`logging in as ${form.email}`);
      }else{
        console.log('Signing up with ;',form);
        alert(`signing up as ${form.email}`)
      }
    };
      const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    {/* 🔹 TOP NAV */}
      <section className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* Desktop Searchbar */}
          <div className={`nav-search ${showSearch ? "active" : ""}`}>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="nav-input"
            />
          </div>

          {/* Hotline */}
          <div className="nav-hotline">
            <p>
              Hotline: +01 1234 8888 <br />
              24/7 Support Center
            </p>
          </div>

          {/* Icons */}
          <div className="nav-icons">
            {/* 🔎 Standalone search toggle icon */}
            <div
              className="icon-btn search-toggle"
              onClick={() => setShowSearch(!showSearch)}
            >
              <IoSearchOutline />
            </div>

            <div onClick={toggleForm} className="icon-btn">
              <CgProfile />
            </div>
            <div className="icon-btn">
              <FaRegHeart />
            </div>
            <div onClick={toggleCart} className="icon-btn cart">
              <ImCart />
              <span className="cart-badge">{cartItems.length}</span>
            </div>

            {/* Hamburger */}
            <div
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 BOTTOM NAV */}
      <section className="navbar-bottom">
        <div className="bottom-container">
          <div className="bottom-categories">Shop by Categories</div>
          <div className={`bottom-menus ${menuOpen ? "open" : ""}`}>
            <p>Home</p>
            <p>Shop</p>
            <p>Product</p>
            <p>Blog</p>
            <p>Page</p>
            <p>Buy Theme</p>
          </div>
          <div className="bottom-sale">Super Sales</div>
        </div>
      </section>

<div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
  {/* Overlay */}
  <div className="cart-overlay" onClick={toggleCart}></div>

  {/* Cart Content */}
  <div className="cart-content">
    {/* Close Icon */}
    <div className="cart-close" onClick={toggleCart}>
      &#10005; {/* Unicode X */}
    </div>

    {/* Header: Buttons & Total */}
    <div className="cart-header">
      <div className="cart-buttons">
        <button className="view-cart-btn">View Cart</button>
        <button className="checkout-btn">Checkout</button>
      </div>
      <div className="cart-total">
        <span>TOTAL</span>
        <span className="total-amount">$. {totalAmount}</span>
      </div>
    </div>

    {/* Product List */}
    <div className="cart-products">
      {cartItems.map((item) => (
        <div className="cart-product" key={item.id}>
          <div className="product-img">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="product-info">
            <div className="product-header">
              <p className="product-name">{item.name}</p>
              <p className="product-price">$. {item.price}</p>
              <div
                className="remove-product"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <FaTrashCan />
              </div>
            </div>
            <div className="product-qty">
              <button
                className="qty-btn"
                onClick={() => dispatch(decrementQty(item.id))}
              >
                -
              </button>
              <span className="qty">{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => dispatch(incrementQty(item.id))}
              >
                +
              </button>
              <span className="product-total">
                $. {item.price * item.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



      <div className={`login-bg ${formOpen  ? "form-visible":""} `}>
        <div className="auth-container">
        <h2>{isLogin ? "login" : "signup"}</h2>
        <form action="" onSubmit={handleSubmit} className="auth-form">
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p className="toggle">
          {isLogin ? "Don't have an account" : "Already Have an account?"}{""}
          <button onClick={handleToggle} className="link-btn">{isLogin ? 'Sign Up' : 'Login'}</button>
        </p>
      </div>
      </div>

</>
  );
};

export default CartComponent;
