// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import About from "../about/About";
import Project from "../about/Project";
import Project2 from "../about/Project2";
import Socilalink from "./Socilalink";
import { FaGithub } from "react-icons/fa6";
import Footer from "../footer/Footer";

const Home = () => {

    return (
        <div className="pt-[70px]">
            <div className="relative h-[700px] lg:h-[400px]" style={{ backgroundImage: "url('https://i.ibb.co/2Y52pvL/let-s-play-the-game.png')", backgroundSize: "cover", backgroundPosition: "center", }}>

                <div className=" absolute grid lg:grid-cols-2 grid-col-1  items-center pl-10">
                    <div>
                        <h1 className=" text-xl lg:text-4xl text-white font-bold mb-3"> Hi there, <br /> i am Naymul islam</h1>
                        <p className="text-white font-bold"> As a passionate <span className="text-green-500 font-bold">front-end web developer</span> with a keen eye for design and  a knack for creating engaging user experiences. My journey in the world of  coding  began with a fascination for turning ideas into visually appealing and functional websites.</p>
                       <div className="flex gap-4">
                       <a
                            href="https://drive.google.com/file/d/1VK1zCGLwIE-ZWZ4J-v7nXP5I9r_4jvWV/view?usp=drive_link"
                            download="Naymul Islam resume.pdf"
                        // onClick={handleDownload}
                        >
                            <button className=" lg:px-4 lg:py-3 bg-slate-300 hover:bg-red-400 mt-5 rounded-xl text-2xl">
                                Download Resume
                            </button>
                        </a>
                        <h1 className="text-center flex justify-center items-center"> <Link to="https://github.com/Naymul-NN"> <button className=" px-4 lg:py-3 bg-slate-300 hover:bg-red-400 mt-5 rounded-xl text-2xl "><div className="flex justify-center items-center"><h1>See github</h1> <FaGithub className="text-2xl pl-2"></FaGithub></div> </button></Link></h1>
                       </div>
                    </div>
                    <div className=" lg:pl-20">
                        <img src="https://i.ibb.co/wwKj2Zx/My-project.png" alt="" height="500px" width="300px" />
                    </div>
                </div>

            </div>
            <About></About>
            <Project></Project>
            <div className="divider"></div> 
            <Project2></Project2>
            <div className="divider"></div> 
            <Socilalink></Socilalink>
            <Footer></Footer>
        </div>
    );
};

export default Home;