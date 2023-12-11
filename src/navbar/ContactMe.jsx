import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";



const ContactMe = () => {
    return (
        <div className=" flex ">
            <div className="flex-1">
                <p>Please enter your details and message below to send your enquires . I will always <br/> replay your message swiftly.</p>
                <form action="https://formspree.io/f/mknldkbb" method="POST">
                    <div className="py-5">
                        <label>

                            <input className="border w-[80%]" type="text" name="name" placeholder="type your name" />
                        </label>
                    </div>
                    <div>
                        <label>

                            <input className="border w-[80%]" type="email" name="email" placeholder="your email" />
                        </label>
                    </div>
                    <div className="pt-10 pb-7">
                        <label>

                            <textarea className="border w-[80%] h-32 text-white placeholder-orange-500 bg-indigo-950" name="message" placeholder="your massege" />
                        </label>
                    </div>
                    <button className="btn bg-slate-400 hover:bg-orange-400" type="submit">Submit</button>
                </form>
            </div>
            <div className=" w-96 bg-pink-300 rounded-xl">
                <h1 className="pl-5 pt-2 pb-5"> you can also contact me via my personal phone number and eamil.
                </h1>
                <p className="flex  items-center pl-5"><FaPhone></FaPhone> +8801778447814</p>
                <p className="flex items-center pl-5 pt-3"><IoMdMail></IoMdMail> aymulislam108@gmail.com</p>
            </div>
        </div>
    );
};

export default ContactMe;