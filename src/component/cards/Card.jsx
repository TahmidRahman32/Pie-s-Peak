import { IoTimeOutline } from "react-icons/io5";
import { FaFireFlameCurved } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ card, handleCardBtn }) => {
   const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories, } = card;
   return (
      
      <div className="card bg-base-100 shadow-xl px-2 py-4">
         <figure>
            <img className="w-80 h-56 rounded-xl" src={recipe_image} alt="Shoes" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{recipe_name}</h2>
            <p className="text-gray-500 mb-4">{short_description}</p>
            <hr />
            <div className="text-gray-500 mb-4">
               <h3 className="font-bold mb-2 text-black">Ingredients: 3</h3>
               <li>{ingredients[0]}</li>
               <li>{ingredients[1]}</li>
               <li>{ingredients[2]}</li>
            </div>
            <hr />
            <div>
               <p className="flex gap-5">
                  <span className="flex items-center gap-2">
                     <IoTimeOutline />

                     <small className="text-gray-500 ">{preparing_time}</small>
                  </span>
                  <span className="flex items-center gap-2 text-gray-500 ">
                     <FaFireFlameCurved />

                     <small className="">{calories}</small>
                  </span>
               </p>
            </div>
            <div className="card-actions justify-end">
               <Link onClick={() => handleCardBtn(card)}>
                  <button className="btn bg-pint text-white rounded-3xl">Want to Cook</button>
                 
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Card;
