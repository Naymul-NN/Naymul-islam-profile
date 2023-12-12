
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import img1 from "../assets/Screenshot (46).png";
import img2 from "../assets/Screenshot (47).png";
import img3 from "../assets/Screenshot (49).png";

const Project = () => {
    return (
        <div >
          <h1 className="text-3xl text-center mb-5 pb-3 w-96 mx-auto font-bold border-b-2 mt-7 border-b-red-500">Some of my projects</h1>
          <div className="lg:flex grid grid-cols-1 justify-between items-center gap-4">
            <div className="flex-1 items-center">
             <h1><strong>Name:</strong><Link to="https://tourbd.surge.sh/"> TourBd.COM </Link> </h1>
             <p className="py-3"><strong>About the project:</strong> This is a Tour management website , if anyone want to visit Bangladesh.Then he/she can book a package from your website we plane here , where he/she will taravel. On this website i make three role one is ADMIN second is guide last is user , there is a dashbord , everyone  see his/her dashbord by his/her role . some of your website feature you can see on the right side </p>
             <hr />
             <p className="py-3"><strong>Used Technology: </strong> TailwindCSS | daisyui | javascript | react.js | Firebase | node.js | express.js |MongoDB </p>

             <p className="text-center border-b-2 border-b-red-500 w-40 mx-auto pb-2"><strong>links</strong></p>
             <p  className="pt-3"><strong>live link:</strong> <Link className="text-green-400 font-bold" to="https://tourbd.surge.sh/">TourBd.com</Link> </p>
             <p ><strong>Client side github link:</strong> <Link className="text-green-400 font-bold" to="https://github.com/Naymul-NN/TourBd-client">Client-site.github</Link> </p>
             <p ><strong>Server side github link:</strong> <Link className="text-green-400 font-bold" to="https://github.com/Naymul-NN/TourBd.server"> Server-site.gitgub</Link> </p>

            </div>
            <div className="flex-1 pt-10">
          <Carousel  autoPlay infiniteLoop   >
           <div>
               <img src={img1} />
           </div>
           <div>
               <img src={img2} />
           </div>
           <div>
               <img src={img3} />
           </div>
       </Carousel>
        </div>
          </div>
       
        </div>
    );
};

export default Project;