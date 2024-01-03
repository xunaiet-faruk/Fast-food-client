import Banner from "../Component/Banner/Banner";
import Bestfood from "../Component/Bestfood/Bestfood";
import Feedback from "../Component/Feedback/Feedback";
import Speacial from "../Component/Speacial/Speacial";
import Works from "../Component/Works/Works";
import Fotter from "../Shared/Fotter/Fotter";
import Navbar from "../Shared/Navabr/Navbar";

const Home = () => {
    return (
        <div>
        
           <Banner/>
           <Speacial/>
           <Bestfood/>
           <Works/>
           <Feedback/>
         
        </div>
    );
};

export default Home;