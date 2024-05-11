import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";


const Cards = () => {
   const [cards, setCards] = useState([]);

   useEffect(()=>{
      fetch("data.json")
         .then((res) => res.json())
         .then((data) => setCards(data));
   },[])
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
                     <Card key={card.id} card={card}></Card>
                  ))}
               </div>
            </div>
            <div className="col-span-1">
               <h2>hh</h2>
             
            </div>
         </div>
      </div>
   );
};

export default Cards;