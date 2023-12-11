import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Socilalink = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold py-5 text-center">Contact Me in :</h1>
           <div className="flex justify-evenly">
           <div>
               <FaLinkedin className="text-6xl"></FaLinkedin>
            </div>
            <div>
               <FaTwitter className="text-6xl"></FaTwitter>
            </div>
            <div>
               <FaInstagram className="text-6xl"></FaInstagram>
            </div>
            <div>
               <FaFacebook className="text-6xl"></FaFacebook>
            </div>
           </div>

        </div>
    );
};

export default Socilalink;