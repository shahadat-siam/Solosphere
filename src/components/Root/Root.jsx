import { Outlet } from "react-router-dom";
import Navbar from "../Navbar"; 
import Footer from "../Footer";

 
const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[calc(100vh-306px)]"> <Outlet/></div>
            <Footer/>
        </div>
    );
};

export default Root;