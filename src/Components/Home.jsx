import Banner from "./Banner";
import Adventures from "../Adventures";
import FirstStep from "../FirstStep";
import SecondStep from "../SecondStep";
import NextLevel from "../NextLevel";
import { Helmet } from "react-helmet-async";

;


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Eco Adventure | Home</title>
            </Helmet>
            <Banner></Banner>
            <Adventures></Adventures>
            <FirstStep></FirstStep>
            <SecondStep></SecondStep>
            <NextLevel></NextLevel>
        </div>
    );
};

export default Home;