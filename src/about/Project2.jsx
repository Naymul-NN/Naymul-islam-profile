import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import img4 from "../assets/Screenshot (50).png"
import img5 from "../assets/Screenshot (51).png"
import img6 from "../assets/Screenshot (52).png"
import { FaGithub } from "react-icons/fa6";


const Project2 = () => {
    return (
        <div>    
            <div className="lg:flex grid grid-cols-1 justify-between items-center gap-4">
                <div className="flex-1 pt-10 ">
                    <Carousel autoPlay infiniteLoop   >
                        <div>
                            <img src={img4} />
                        </div>
                        <div>
                            <img src={img5} />
                        </div>
                        <div>
                            <img src={img6}/>
                        </div>
                    </Carousel>
                </div>

                <div className="flex-1 items-center">
                    <h1><strong>Name:</strong><Link to="https://help-hand.surge.sh"> ToBeHelper.COM </Link> </h1>
                    <p className="py-3"><strong>About the project:</strong> Tobehelper.com is a ofline home service website . Here you can book a service . And a service provider will go your home and fix your problem that you book already . This website web site is fully priver route protected that mean if any one is not logged in to your website then he/she can not book a service , and also a user can see his/her activity  </p>
                    <hr />
                    <p className="py-3"><strong>Used Technology: </strong> TailwindCSS | javascript | react.js | Firebase | node.js | express.js |MongoDB | so many npm packages </p>

                    <p className="text-center border-b-2 border-b-red-500 w-40 mx-auto pb-2"><strong>links</strong></p>
                    <p className="pt-3"><strong>live link:</strong> <Link className="text-green-400 font-bold" to="https://help-hand.surge.sh/">ToBehelper.com</Link> </p>
                    <p ><strong>Client side github link:</strong> <Link className="text-green-400 font-bold" to="https://github.com/Naymul-NN/Tobehelper-client">Client-site.github</Link> </p>
                    <p ><strong>Server side github link:</strong> <Link className="text-green-400 font-bold" to="https://github.com/Naymul-NN/ToBeHelpler-server"> Server-site.gitgub</Link> </p>
                </div>

            </div>
             <h1 className="pt-7 text-center flex justify-center items-center"> <Link to="https://github.com/Naymul-NN"> <button className="btn bg-slate-400 hover:bg-orange-400 "><div className="flex justify-center items-center"><h1>see more</h1> <FaGithub className="text-2xl pl-2"></FaGithub></div> </button></Link></h1>
        </div>
    );
};

export default Project2;