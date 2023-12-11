// import { Link } from "react-router-dom";

import About from "../about/About";
import Project from "../about/Project";
import Project2 from "../about/Project2";

const Home = () => {

    return (
        <div>
            <div className="relative" style={{ backgroundImage: "url('https://i.ibb.co/2Y52pvL/let-s-play-the-game.png')", backgroundSize: "cover", backgroundPosition: "center", height: "400px" }}>

                <div className=" absolute flex justify-between items-center pl-10">
                    <div>
                        <h1 className="text-4xl text-white font-bold mb-3"> Hi there, <br /> i am Naymul islam</h1>
                        <p className="text-white font-bold"> As a passionate <span className="text-green-500 font-bold">front-end web developer</span> with a keen eye for design and <br /> a knack for creating engaging user experiences. My journey in the world of  coding <br /> began with a fascination for turning ideas into visually appealing and functional websites.</p>
                        <a
                            href="https://drive.google.com/file/d/1VK1zCGLwIE-ZWZ4J-v7nXP5I9r_4jvWV/view?usp=drive_link"
                            download="Naymul Islam resume.pdf"
                        // onClick={handleDownload}
                        >
                            <button className="px-4 py-3 bg-slate-300 hover:bg-red-400 mt-5 rounded-xl text-2xl">
                                Download Resume
                            </button>
                        </a>
                    </div>
                    <div className="pl-16">
                        <img src="https://i.ibb.co/wwKj2Zx/My-project.png" alt="" height="500px" width="300px" />
                    </div>
                </div>

            </div>
            <About></About>
            <Project></Project>
            <div className="divider"></div> 
            <Project2></Project2>
        </div>
    );
};

export default Home;