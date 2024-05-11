

const Banner = () => {
   return (
      <div className="my-8 bg-banner-img text-center h-[600px] bg-cover bg-center rounded-2xl text-white ">
         <div className="bg-gradient-to-r from-[#150B2Bcc] to-[#150B2B80] h-full space-y-8 pt-36 rounded-2xl">
            <h1 className="text-5xl font-bold">
               Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="px-56">
               Opening a Japanese restaurant is an exciting venture. With a focus on traditional Japanese cuisine, from sushi bars to tempura houses, you aim to provide a unique dining experience. However, the process doesn’t stop at serving
               delicious food.
            </p>
            <div className="">
               <button className="btn mr-4 bg-pint rounded-xl border-0 text-white">Explore Now</button>
               <button className="btn rounded-3xl btn-outline text-pint">Our Feedback</button>
            </div>
         </div>
      </div>
   );
};

export default Banner;