import { BsBookmarkPlus } from "react-icons/bs";
// import { BsBookmarkCheck } from "react-icons/bs";
const Blogs = () => {
  return (
    <>
    <div className="w-full md:w-2/3 lg:w-3/4 mb-10">
        <img
            src="https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg"
            alt="Blog Thumbnail"
            className="w-full h-auto rounded-lg"
        />
        <div className="flex gap-4 mt-6">
            <img
            alt="Author Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex justify-between w-full items-center">
            <div>
                <p className="font-semibold">Mr. Shaikat</p>
                <small className="text-gray-500">March 14 (4 days ago)</small>
            </div>
            <div className="flex gap-1">
                <div>
                    <p className="text-sm text-gray-500">05 min read</p>
                </div>
                <div>
                    <BsBookmarkPlus style={{ fontSize: '2rem'}} />                
                </div>
            </div>
            {/* <BsBookmarkCheck /> */}
            </div>
        </div>
        <p className="mt-4 text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo assumenda ipsa non aperiam exercitationem minima, consectetur consequatur?
        </p>
        <div className="flex gap-2 mt-2">
            <span className="text-blue-500">#lwda</span>
            <span className="text-blue-500">#sdsc</span>
            <span className="text-blue-500">#qwza</span>
        </div>
        <a href="#" className="inline-block mt-4 text-blue-600 hover:underline">Mark as read</a>
    </div>
    </>
  );
};

export default Blogs;
