import "./App.css";
import Nav from "./component/Navbar/Nav";
import Banner from "./component/banner/Banner";
import Cards from "./component/cards/Cards";

import { Toaster } from "react-hot-toast";

function App() {
   return (
      <div className="max-w-7xl mx-auto">
         <Nav></Nav>
         <Banner></Banner>
         <Cards></Cards>
         <Toaster />
      </div>
   );
}

export default App;
