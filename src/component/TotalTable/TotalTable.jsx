

const TotalTable = ({ total }) => {
  
   const { recipe_name, preparing_time, calories } = total;
   const time = total.preparing_time.slice(0,2);
   const timeString = parseInt(time)
   console.log(timeString);
   return (
      <div>
         <div className="bg-base-200 flex justify-between gap-4 px-2 py-4 my-2 rounded-2xl">
            <p>{recipe_name.slice(0, 15)}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
         </div>
      </div>
   );
};

export default TotalTable;