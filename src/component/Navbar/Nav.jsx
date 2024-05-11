
import profile from "../../assets/img/552848.png";
import logo from "../../assets/img/tran.png";
const Nav = () => {
   return (
      <div>
         <div className="navbar bg-base-100 justify-between">
            <div className=" flex items-center">
               <img className="w-20" src={logo} alt="" />
               <a className=" text-xl uppercase font-bold">Pie’s Peak</a>
            </div>
            <div>
               <ul className="flex gap-4">
                 
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
         </div>
      </div>
   );
};

export default Nav;
