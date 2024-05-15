 
import Carosoul from "../../Carosoul"; 
import ReactTabs from "./ReactTabs";

const Home = () => {  
  return (
    <div className="mb-7">
      {/* <Slide/> */}
      <Carosoul />
      <div className="my-6">
        <h2 className="text-4xl font-semibold font-lato">
          Browse Jobs By Categories
        </h2>
        <p className="lg:max-w-2xl mx-auto py-2 text-gray-500">
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
      </div>
      <ReactTabs />
    </div>
  );
};

export default Home;
