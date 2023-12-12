import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import imgcode from '../assets/coding.png';

const AboutMe = () => {
    const word = "What I Love About Front-End Development:";
    return (
        <div className="pt-[70px]">
            <div>
                <h1 className="text-2xl pb-4 ">Education:</h1>
                <p>Graduation: Department of History,<Link to="https://www.ru.ac.bd/" className="text-green-500"> University of Rajshahi</Link></p>
                <p>year: 2020 - at prsent</p>

            </div>
            <div>
                <h1 className="text-2xl font-bold pt-7 pb-3">

                    <Typewriter
                        words={[word]}
                        cursor
                        loop={1}
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={0}
                    />
                </h1>
                <p className="w-full rounded-xl p-3 lg:h-[100px] bg-gradient-to-r from-blue-100 via-purple-500 to-orange-300  flex justify-center items-center">In the realm of front-end development, I find my true passion lies in the harmonious fusion of creativity and technology. Crafting visually stunning and intuitive user interfaces is not just a job for me; it is a form of artistic expression. I relish the challenge of transforming static designs into dynamic, interactive web experiences that captivate and engage users.</p>
            </div>
            <div className="flex flex-col-reverse lg:grid grid-cols-2 lg:gap-10 items-center pt-10 justify-evenly">
                <div>
                <h1 className=" font-bold pb-3">My journey of programing</h1>
                <p>Programing was not a easy task for me , but my unbeliveable patience and my attempt make me a littel programmer . this is just start my journey i <br /> will take it so far, i want to be a full-stack developer    </p>
                </div>
                <div>
                    <img src={imgcode} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;