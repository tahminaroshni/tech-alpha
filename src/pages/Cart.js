import { useState } from "react";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const products = [
  {
    "id": 1,
    "name": "Blink Mini – Compact indoor plug-in smart security camera",
    "description": "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    "price": 64.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "Camera"
  },
  {
    "id": 2,
    "name": "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    "description": "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    "price": 109.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    "category": "Camera"
  },
  {
    "id": 3,
    "name": "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    "description": "Witness millions of shades of color through powerful Dynamic Crystal technology",
    "price": 497.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    "category": "TV"
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);

  const handleIncreaseBtn = () => {
    setCount((previousCount) => previousCount + 1);
  }

  const handleDecreaseBtn = () => {
    setCount((previousCount) => previousCount - 1);
  }

  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title space-font text-center mb-10 text-2xl font-bold tracking-wider  uppercase">Your Cart</h2>
      <div className="grid grid-cols-5 uppercase font-medium tracking-wider pb-3 border-b border-slate-300">
        <h3 className="col-span-2">Product</h3>
        <h3> Unit Price</h3>
        <h3>Quantity</h3>
        <h3 className="justify-self-end">Total</h3>
      </div>
      <div className="cart-item-container">
        {
          products.map(product => {
            return (<div key={product.id} className="cart-item grid grid-cols-5 gap-5 items-center py-5 border-b border-slate-300">
              <div className="col-span-2">
                <div className="cart-info grid grid-cols-8 gap-5 h-24">
                  <div className="cart-img col-span-2">
                    <img className="object-cover" src={product.image} alt={product.name} />
                  </div>
                  <div className="cart-texts col-span-6 flex flex-col items-start gap-3">
                    <h4 className="product-title ">{product.name}</h4>
                    <button className="remove-btn text-slate-500 hover:text-rose-600">Remove</button>
                  </div>
                </div>
              </div>
              <h2>{currencyFormatter(product.price)}</h2>
              <div className="flex gap-6">
                <span
                  onClick={() => handleDecreaseBtn()}
                  className="w-6 h-6 border border-slate-500 rounded-sm flex justify-center items-center active:bg-slate-600 active:text-slate-50">-</span>
                <span>{count}</span>
                <span
                  onClick={() => handleIncreaseBtn()}
                  className="w-6 h-6 border border-slate-500 rounded-sm flex justify-center items-center active:bg-slate-600 active:text-slate-50">+</span>
              </div>
              <h2 className="total-price justify-self-end">{currencyFormatter(product.price)}</h2>
            </div>)
          })
        }
      </div>
      <div className="cart-lower-section flex justify-between items-start py-10">
        <button className="clear-btn bg-rose-200 text-rose-500 uppercase tracking-wider hover:bg-rose-500 hover:text-rose-50 p-3 px-5 font-medium border border-rose-500 duration-300">Clear cart</button>
        <div className="flex flex-col gap-3">
          <div className="subtotal-section text-cyan-500 font-medium text-2xl flex justify-between">
            <h2>Subtotal</h2>
            <h2>$200</h2>
          </div>
          <p className="text-slate-400">Taxes and shipping costs are calculated at the checkout</p>
          <button className="checkout-btn uppercase tracking-widest font-medium bg-cyan-500 text-cyan-50 hover:bg-slate-700 hover:tetxt-slate-50 duration-300 p-3">Checkout</button>
          <Link className="continue text-lg text-cyan-500">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;