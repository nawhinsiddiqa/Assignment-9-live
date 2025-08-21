
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/slider-1.jpg'
import img2 from '../assets/slider-22.jpg'
import img3 from '../assets/slider-33.jpg'




const Banner = () => {
    return (
        <div className="w-7/12 mx-auto my-8" data-aos="flip-left">

            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="text-2xl font-bold mt-5">The next step of your expectation</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="text-2xl font-bold mt-5">

                        Patient satisfaction is not just our goal, it is our mission
                    </p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="text-2xl font-bold mt-5"> Return the patients in society with normal appearance
                    </p>
                </div>
            </Carousel>

        </div>
    );
};

export default Banner;