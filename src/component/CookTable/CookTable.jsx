const CookTable = ({ cooking, handlePreparingBtn }) => {
   // console.log(cooking);
   const { preparing_time, recipe_name, calories } = cooking;
   return (
      <div>
         <div className="bg-base-200 flex justify-between gap-4 px-2 py-4 my-2 rounded-2xl">
            <p></p>
            <p>{recipe_name.slice(0, 20)}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button onClick={ () => handlePreparingBtn()} className="bg-pint text-white px-2 py-1 rounded-2xl ">
               Preparing
            </button>
            {/* <th>1</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td> */}
         </div>
      </div>
   );
};

export default CookTable;
