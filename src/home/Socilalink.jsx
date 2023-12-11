import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Socilalink = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold py-5 text-center">Contact Me in :</h1>
           <div className="flex justify-evenly">
           <div>
               <Link to="https://www.linkedin.com/in/naymul-islam-85a3a8256/"><FaLinkedin className="text-6xl"></FaLinkedin></Link>
            </div>
            <div>
               <Link to="https://twitter.com/NaymulI80317038"><FaTwitter className="text-6xl"></FaTwitter></Link>
            </div>
            <div>
               <Link to="https://www.instagram.com/naymulislamislam/"><FaInstagram className="text-6xl"></FaInstagram></Link>
            </div>
            <div>
               <Link to="https://www.facebook.com/naymulislam.islam.56"><FaFacebook className="text-6xl"></FaFacebook></Link>
            </div>
           </div>

        </div>
    );
};

export default Socilalink;