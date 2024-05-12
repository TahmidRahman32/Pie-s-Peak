import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import toast from "react-hot-toast";
import CookTable from "../CookTable/CookTable";

const Cards = () => {
   const [cards, setCards] = useState([]);
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      fetch("data.json")
         .then((res) => res.json())
         .then((data) => setCards(data));
   }, []);
     
   const handleCardBtn = (orderId) => {
     
      
      const orderFind = orders.find((order) => order.id == orderId.id);
      if (!orderFind) {
         const orderItem = [...orders, orderId];
        setOrders(orderItem);
         // // console.log(orderItem);
         // orders.map((element) => {
         //    console.log(element);
         //    
         //    const div = document.createElement("div");
         //    div.classList = "bg-gray-400 px-3 py-4 flex gap-6 justify-between";
         //    div.innerHTML = `
           
         //    <p>1</p>
         //    <p>${recipe_name}</p>
         //    <p>T: ${preparing_time.slice(0, 2)}</p>
         //    <p>C:${calories.slice(0, 3)}</p>
         
         //    `;
         //    cardId.appendChild(div);
         // });
          
      } else {
         
         toast.error("This didn't work.");
         console.log('not');
      }
      // console.log(count);
   };
  
   
   return (
      <div>
         <div className="text-center mt-16">
            <h2 className="text-3xl font-bold uppercase">flatbread pizza</h2>
            <p>
               Pizza and its variants are among the most popular foods in the world. <br /> Pizza is sold at a variety of restaurants,
            </p>
         </div>
         <div className="grid grid-cols-3 gap-6 my-16">
            <div className="col-span-2">
               <div className="grid grid-cols-2 gap-6">
                  {cards.map((card) => (
                     <Card key={card.id} card={card} handleCardBtn={handleCardBtn}></Card>
                  ))}
               </div>
            </div>
            <div className="col-span-1">
               <div>
                  <h2> Want to cook: {orders.length} </h2>
               </div>
               <div className="overflow-x-auto">
                  <table className="table">
                     <thead>
                        <tr className="flex justify-between">
                           
                           <th>Name</th>
                           <th>Time</th>
                           <th>Calories</th>
                           <th></th>
                        </tr>
                     </thead>
                  </table>

                  <div>
                     {orders.map((cooking) => (
                        <CookTable key={cooking.id} cooking={cooking}></CookTable>
                     ))}
                  </div>
                 
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cards;
