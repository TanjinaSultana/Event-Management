import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
const Header = () => {
    const link = < div className="text-xl  ">
    <li  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-700" : "bg-none"
  }>
          <Link to="/">Home</Link>
        </li>
        <li >
          <Link to="/about">About</Link>
        </li>
        <li >
          <Link to="/services">Services</Link>
        </li>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {link}
          </ul>
        
      
    </div>
    <a className=" normal-case text-5xl "><span className="text-[#ff3e49] ">E</span>vent <span className="text-xl">Planner</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
        <li className="flex">

     {link}
        </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>

        </div>
    );
};

export default Header;