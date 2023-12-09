import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="relative" style={{ backgroundImage: "url('https://i.ibb.co/4dfmnNW/pngtree-portfolio-memphis-playful-abstract-pink-image-593412.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "400px" }}>

            {/* <img src="https://i.ibb.co/GWXdbGF/80908-electric-blue-design-pixel-atmosphere-line-x750.jpg" alt="" /> */}
              <div className=" absolute flex justify-between items-center pl-10">
                <div>
                    <h1 className="text-4xl font-bold mb-3"> Hi there, <br /> i am Naymul islam</h1>
                    <p> As a passionate <span className="text-green-500 font-bold">front-end web developer</span> with a keen eye for design and <br /> a knack for creating engaging user experiences. My journey in the world of  coding <br /> began with a fascination for turning ideas into visually appealing and functional websites.</p>
                    <Link to="https://drive.google.com/file/d/1VK1zCGLwIE-ZWZ4J-v7nXP5I9r_4jvWV/view?usp=drive_link">
                        <button className=" px-7 py-4 bg-slate-300 hover:bg-red-400 mt-5 rounded-xl text-2xl">
                            view resume
                        </button>
                    </Link>
                </div>
                <div className="pl-16">
                    <img src="https://i.ibb.co/wwKj2Zx/My-project.png" alt="" height="500px" width="300px" />
                </div>
            </div>
        
        </div>
    );
};

export default Home;