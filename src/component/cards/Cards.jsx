import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import toast from "react-hot-toast";
import CookTable from "../CookTable/CookTable";
import TotalTable from "../TotalTable/TotalTable";

const Cards = () => {
   const [cards, setCards] = useState([]);
   const [orders, setOrders] = useState([]);
   const [current, setCurrent] = useState([]);

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
      } else {
         toast.error("This didn't work.");
      }
      // console.log(count);
   };

   const handlePreparingBtn = () => {
      setOrders([]);
      const newCurrent = [...orders];
      setCurrent(newCurrent);
      console.log("up", newCurrent);
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
            <div className="col-span-1 px-6 shadow-lg py-2">
               <div className="text-center my-2">
                  <h2 className="text-xl font-semibold uppercase"> Want to cook: {orders.length} </h2>
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
               </div>
               <div>
                  {orders.map((cooking) => (
                     <CookTable key={cooking.id} cooking={cooking} handlePreparingBtn={handlePreparingBtn}></CookTable>
                  ))}
               </div>
               <div className="text-center my-2 mt-8">
                  <h2 className="text-2xl font-bold"> Currently cooking:{current.length} </h2>
               </div>
               <div className="overflow-x-auto ">
                  <table className="table">
                     <thead>
                        <tr className="flex justify-between">
                           <th>Name</th>
                           <th>Time</th>
                           <th>Calories</th>
                        </tr>
                     </thead>
                  </table>
               </div>
               <div>
                  {current.map((total) => <TotalTable key={total.id} total={total}></TotalTable> )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cards;
