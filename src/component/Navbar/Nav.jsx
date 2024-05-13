
import profile from "../../assets/img/552848.png";
import logo from "../../assets/img/tran.png";
const Nav = () => {
   const navLink = (
      <>
         <ul className="md:flex gap-4">
            <li className="text-gray-500 font-semibold hover:underline hover:text-blue-500">Home</li>
            <li className="text-gray-500 font-semibold hover:underline hover:text-blue-500">Recipes</li>
            <li className="text-gray-500 font-semibold hover:underline hover:text-blue-500">About</li>
            <li className="text-gray-500 font-semibold hover:underline hover:text-blue-500">Search</li>
         </ul>
      </>
   );
   return (
      <div>
         {/* <div className="navbar bg-base-100 justify-between">
            <div className=" flex items-center">
               <img className="w-20" src={logo} alt="" />
               <a className=" text-xl uppercase font-bold">Pie’s Peak</a>
            </div>
            <div>
               <ul className="md:flex gap-4">
                  <li className="text-gray-500 font-semibold hover:underline hover:text-blue-500">Home</li>
                  <li className="text-gray-500 font-semibold hover:underline hover:text-blue-500">Recipes</li>
                  <li className="text-gray-500 font-semibold hover:underline hover:text-blue-500">About</li>
                  <li className="text-gray-500 font-semibold hover:underline hover:text-blue-500">Search</li>
               </ul>
            </div>
            <div className="flex-none gap-2">
               <div className="form-control">
                  <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
               </div>
               <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     <div className="w-10 rounded-full bg-pint px-1 py-1">
                        <img alt="Tailwind CSS Navbar component " src={profile} />
                     </div>
                  </div>
               </div>
            </div>
         </div> */}
         {/* nav2 */}
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLink}
                  </ul>
               </div>
               <div className=" flex items-center">
                  <img className="w-20" src={logo} alt="" />
                  <a className=" text-xl uppercase font-bold">Pie’s Peak</a>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">{navLink}</ul>
            </div>
            <div className="navbar-end">
               <div className="flex gap-2">
                  <div className="form-control">
                     <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                  </div>
                  <div className="dropdown dropdown-end">
                     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full bg-pint px-1 py-1">
                           <img alt="Tailwind CSS Navbar component " src={profile} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Nav;
