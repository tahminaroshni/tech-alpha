import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseProductQuantity, getSubTotalPrice, removeFromCart } from "../features/products/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Cart = () => {
  const { cartItems, cartTotalAmount } = useSelector(state => state.cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  }

  const handleIncreaseBtn = (product) => {
    dispatch(addToCart(product))
  }

  const handleDecreaseBtn = (product) => {
    dispatch(decreaseProductQuantity(product));
  }

  useEffect(() => {
    dispatch(getSubTotalPrice());
  }, [cartItems, dispatch])

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
          cartItems.map(product => {
            return (<div key={product.id} className="cart-item grid grid-cols-5 gap-5 items-center py-5 border-b border-slate-300">
              <div className="col-span-2">
                <div className="cart-info grid grid-cols-8 gap-5 h-24">
                  <div className="cart-img col-span-2">
                    <img className="object-cover" src={product.image} alt={product.name} />
                  </div>
                  <div className="cart-texts col-span-6 flex flex-col items-start gap-3">
                    <h4 className="product-title ">{product.name}</h4>
                    <button
                      onClick={() => handleRemoveFromCart(product)}
                      className="remove-btn text-slate-500 hover:text-rose-600">Remove</button>
                  </div>
                </div>
              </div>
              <h2>{currencyFormatter(product.price)}</h2>
              <div className="flex gap-6">
                <span
                  onClick={() => handleDecreaseBtn(product)}
                  className="w-6 h-6 border border-slate-500 rounded-sm flex justify-center items-center active:bg-slate-600 active:text-slate-50">-</span>
                <span>{product.cartQuantity}</span>
                <span
                  onClick={() => handleIncreaseBtn(product)}
                  className="w-6 h-6 border border-slate-500 rounded-sm flex justify-center items-center active:bg-slate-600 active:text-slate-50">+</span>
              </div>
              <h2 className="total-price justify-self-end">{currencyFormatter(product.price * product.cartQuantity)}</h2>
            </div>)
          })
        }
      </div>
      <div className="cart-lower-section flex justify-between items-start py-10">
        <button
          onClick={() => dispatch(clearCart())}
          className="clear-btn bg-rose-200 text-rose-500 uppercase tracking-wider hover:bg-rose-500 hover:text-rose-50 p-3 px-5 font-medium border border-rose-500 duration-300">Clear cart</button>
        <div className="flex flex-col gap-3">
          <div className="subtotal-section text-cyan-500 font-medium text-2xl flex justify-between">
            <h2>Subtotal</h2>
            <h2>{cartTotalAmount.toFixed(2)}</h2>
          </div>
          <p className="text-slate-400">Taxes and shipping costs are calculated at the checkout</p>
          <button className="checkout-btn uppercase tracking-widest font-medium bg-cyan-500 text-cyan-50 hover:bg-slate-700 hover:tetxt-slate-50 duration-300 p-3">Checkout</button>
          <Link to='/products' className="continue text-lg text-cyan-500">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;