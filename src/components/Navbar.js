import { Link } from "react-router-dom";
import { BsCart } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className="navbar bg-slate-600 px-10 h-20 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="left">
          <h4 className="logo text-2xl text-slate-900 hover:text-cyan-400 duration-300 font-semibold italic">tech<span className="text-cyan-400 hover:text-slate-900">Alpha</span></h4>
        </div>
        <div className="right flex gap-10 items-center text-lg">
          <Link to='/' className="nav-link text-slate-300 hover:text-slate-100  duration-300">Home</Link>
          <Link to='/products' className="nav-link text-slate-300 hover:text-slate-100  duration-300">Products</Link>
          <Link to='/cart' >
            <span className="cart-icon relative text-2xl text-slate-300 hover:text-slate-50 duration-300"><BsCart /></span>
            <span className="cart-count absolute text-sm h-6 w-6 flex justify-center items-center rounded-full bg-rose-500 text-rose-50  top-4 right-24 font-semibold">10</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;