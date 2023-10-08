import { NavLink } from "react-router-dom";
import Banner from "../banner/Banner";
const Header = () => {
  const link =  <div className="">
  <NavLink to='/' className = {({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "bg-[#ff3e49]  font-normal text-xl p-4 rounded-lg mr-8" : "font-normal text-xl mr-4"
}>Home</NavLink>
 <NavLink to='/about' className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "bg-[#ff3e49]  font-normal text-xl p-4 rounded-lg mr-8" : "font-normal text-xl mr-4"
}>About</NavLink>
 <NavLink to="/login"className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "bg-[#ff3e49]  font-normal text-xl p-4 rounded-lg mr-8" : "font-normal text-xl mr-4"
}>Login</NavLink>
 <NavLink to="/register"className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "bg-[#ff3e49]  font-normal text-xl p-4 rounded-lg mr-8" : "font-normal text-xl mr-4"
}>Register</NavLink>

 </div>
    return (
        <div>
            <div className="navbar bg-base-100 mt-4 mb-5">
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
       

     {link}
        
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