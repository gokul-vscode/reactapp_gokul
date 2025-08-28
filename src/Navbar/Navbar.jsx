// import React from "react";
import React, { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../assets/logo-white.svg";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { FaTrashCan } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux"
import { addToCart,incrementQty,decrementQty,removeFromCart } from "../CartSlice/CartSlice";

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

  return (
    <>
      <section className="wholenav">
        <div className="subnav">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="searchbar">
            <input
              type="search"
              name="search"
              placeholder="What are You Looking For Today "
              className="search1"
            /> <span className="search-icon"><IoSearchOutline /></span>
          </div>
          <div className="hotline">
            <p>Hotline: +01 1234 8888 <br />24/7 Support Center</p>
          </div>
          <div className="icon">
            <div className="inicon">
              <div onClick={toggleForm} style={{cursor:"pointer"}}>
                <CgProfile />
              </div>
              <FaRegHeart />
              <div onClick={toggleCart} style={{ cursor: "pointer" }}  className="cart-count">
                <ImCart />
                <p className="cart-notify">{cartItems.length}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wholenav2">
        <div className="subnav2">
          <div className="categories">
            <p>Shop By Categories</p>
          </div>
          <div className="menus">
            <p>Home</p>
            <p>Shop</p>
            <p>Product</p>
            <p>Blog</p>
            <p>Page</p>
            <p>Buy THeme</p>
          </div>
          <div className="supersale">
            <p>Super Sales</p>
          </div>
        </div>
      </div>

      <div className={`main ${cartOpen ? 'cart-visible' : ''}`}>
        <div className="wholecart">
          <div className="subcart">
            <div className="cart-btns">
              <button>View Cart</button>
              <button>CheckOut</button>
            </div>
            <div className="total-amt">
              <p>TOTAL</p>
              <p className="cart-ttl-amt">$. {totalAmount}</p>
            </div>
          </div>
        </div>
        <div className="prod-container">
        {cartItems.map((item)=>(  
          <div className="sub-container" key={item.id}> 
            <div className="img-container">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="prod-detail">
              <div className="sub-detail">
                <div className="prod-name-price">
                  <div className="name-remover">
                    <p className="name-cart">
                     {item.name}
                    </p>
                    <p className="price-cart">$. {item.price}</p>
                  </div>
                  <div className="remove-icon" onClick={()=>dispatch(removeFromCart(item.id))}>
                    <p>
                      <FaTrashCan />
                    </p>
                  </div>
                </div>
                <div className="qty-total">
                  <div className="inc-dec">
                    <button className="dec" onClick={()=>dispatch(decrementQty(item.id))}>-</button>
                    <label htmlFor="" className="labelbox">
                      {item.quantity}
                    </label>
                    <button className="inc" onClick={()=>dispatch(incrementQty(item.id))}>+</button>
                  </div>
                  <div className="total-cart">
                    <p>$. {item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
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
// export { Counter };
