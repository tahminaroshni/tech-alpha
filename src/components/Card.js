import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/products/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleAddToCartBtn = (product) => {
    dispatch(addToCart(product));

    navigate('/cart')
    // console.log(id);
  }

  return (
    <div className="product bg-white w-80 shadow-lg shadow-slate-300 rounded-md hover:shadow-2xl hover:shadow-slate-500 duration-300">
      <div className="image overflow-hidden">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="texts flex flex-col gap-3 p-5">
        <h4 className="category uppercase tracking-widest text-cyan-600 font-semibold text-sm">{product.category}</h4>
        <h3 className="title text-xl h-[5.25rem]">{product.name}</h3>
        <p className="description text-slate-500 h-[6rem]">{product.description}</p>
        <div className="flex justify-between items-center">
          <h2
            className="price text-rose-700 text-xl">{currencyFormatter(product.price)}
          </h2>
          <button
            onClick={() => handleAddToCartBtn(product)}
            className="add-to-cart-btn bg-slate-700 text-slate-50 p-2 px-5 uppercase tracking-widest font-semibold hover:bg-cyan-600 hover:text-cyan-50 duration-300 shadow shadow-slate-500 hover:shadow-md hover:shadow-cyan-300">Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;