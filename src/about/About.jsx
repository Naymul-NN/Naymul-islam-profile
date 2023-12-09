
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import tailwindlImage from "../assets/tailwind css.png";
import javascriptImage from "../assets/javascript.png";
import reactImage from "../assets/react.jpg";
import firebaseImage from "../assets/firebase.png";
import gitImage from "../assets/git.png";
import GithubImage from "../assets/github.png";
import nodeImage from "../assets/node.jpg";
import expressImage from "../assets/express.png";
import mongodbImage from "../assets/mongodb.png";

const About = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold py-4">Professional summery :</h1>
                <p className="w-full rounded-xl h-[100px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  flex justify-center items-center">A passionate front-end developer dedicated to crafting engaging and seamless digital experiences. With a background in 2 year learn programing , I thrive on turning creative ideas into functional, user-friendly websites. My expertise lies in harnessing the power of HTML, CSS, and JavaScript to bring designs to life.
                </p>
            </div>
            <div>
                <h1 className="text-center pt-4 text-3xl font-bold">Skills </h1>
                <div className=" pt-7 flex justify-evenly">
                    <div>
                        <img className="w-16 h-16" src={htmlImage} alt="" />
                        <h1 className="font-bold pl-2">Html5</h1>
                    </div>
                    <div>
                        <img className="w-16 h-16" src={cssImage} alt="" />
                        <h1 className="font-bold pl-2">CSS3</h1>
                    </div>
                    <div>
                        <img className="w-16 h-16" src={tailwindlImage} alt="" />
                        <h1 className="font-bold pl-2">Tailwind</h1>
                    </div>
                    <div>
                        <img className="w-16 h-16" src={javascriptImage} alt="" />
                        <h1 className="font-bold ">Javascript</h1>
                    </div>
                    <div>
                        <img className="w-16 h-16" src={reactImage} alt="" />
                        <h1 className="font-bold pl-2">React.js</h1>
                    </div>
                    <div>
                        <img className="w-16 h-16" src={firebaseImage} alt="" />
                        <h1 className="font-bold pl-2">Firebase</h1>
                    </div>
                    <div>
                        <img className="w-16 h-16" src={gitImage} alt="" />
                        <h1 className="font-bold pl-4">Git</h1>
                    </div>
                    <div>
                        <img className="w-16 h-16" src={GithubImage} alt="" />
                        <h1 className="font-bold pl-2">Github</h1>
                    </div>
                </div>
                <h1 className="text-center  text-3xl font-bold pt-10">Familiar with</h1>
                <div className=" pt-7 flex justify-evenly items-center ">
                    <div>
                        <img className="w-16 h-16" src={nodeImage} alt="" />
                        <h1 className="font-bold pl-2">Node.js</h1>
                    </div>
                    <div>
                        <img className="w-16 h-16" src={expressImage} alt="" />
                        <h1 className="font-bold pl-2">Node.js</h1>
                    </div>
                    <div>
                        <img className="w-16 h-16" src={mongodbImage} alt="" />
                        <h1 className="font-bold pl-2">Node.js</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold pt-7 pb-3">What I Love About Front-End Development:</h1>
                <p className="w-full rounded-xl h-[100px] bg-gradient-to-r from-blue-300 via-purple-500 to-pink-300  flex justify-center items-center">In the realm of front-end development, I find my true passion lies in the harmonious fusion of creativity and technology. Crafting visually stunning and intuitive user interfaces is not just a job for me; it is a form of artistic expression. I relish the challenge of transforming static designs into dynamic, interactive web experiences that captivate and engage users.</p>
            </div>
        </div>
    );
};

export default About;