import Banner from "./Banner";
import HomePage1 from "./HomePage1";
import Feature from "./Feature";


import { Helmet } from "react-helmet-async";

;


const Home = () => {

    return (
        <div>
            <Helmet>
                <title> Artificial Eye | Home</title>
            </Helmet>
            <Banner></Banner>
            <HomePage1></HomePage1>
           <Feature></Feature>
           
          
        </div>
    );
};

export default Home;