import img from "../assets/3293117576_05f43d8305_b.jpg";
const Blog = () => {
    return (
        <div className="relative pt-[70px]">
        <div className="absolute text-3xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-600">
          <h1>I am working on writing blogs ........</h1>
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src={img} alt="" />
        </div>
      </div>
      
    );
};

export default Blog;