import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog,handleBookmarkButton,handleReadingTime }) => {
    const {id,cover_img, author_img, title, author_name, posted_date, reading_time, hastage } = blog;
    return (
        <div className="p-4 border-b space-y-4">
            
            <img className="rounded-lg" src={cover_img} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex space-x-1 items-center">
                    <img className="w-14 h-14 rounded-full object-cover" src={author_img} alt="" />
                    <div>
                        <h2 className="text-2xl font-bold">{author_name}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <p>{reading_time} minit read</p>
                    <button onClick={()=>handleBookmarkButton(blog)}><CiBookmark/></button>
                </div>
            </div>
            <p className="text-5xl">{title}</p>
            <div>
                {
                    hastage.map((a, idx) => <span className="mr-3" key={idx}><a href="#">{a}</a></span>)
                }
            </div>

            <div>
                <button onClick={()=>handleReadingTime(reading_time,id)} className="text-purple-600 underline" >Mark as read</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
   
    blog: PropTypes.object.isRequired,
    handleBookmarkButton:PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func.isRequired
}


export default Blog;