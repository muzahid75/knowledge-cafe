import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarkButton,handleReadingTime}) => {

    const [blogs,setblogs]=useState([]);

    useEffect(()=>{
        fetch('api.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])


    return (
        <div className="md:w-2/3">
            {
                blogs.map((blog ,idx)=> <Blog key={idx} handleBookmarkButton={handleBookmarkButton} handleReadingTime={handleReadingTime} blog={blog}/>)
            }
        </div>
    );
};
Blogs.propTypes = {
   
    handleBookmarkButton: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blogs;