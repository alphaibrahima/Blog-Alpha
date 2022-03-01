import { Link } from "react-router-dom";

const Bloglist = ({blogs_1, titre}) => {

    

    return ( 
        <div className="bloglist">
            <h2>{titre}</h2>
            {
                // blogs_1?.map( (blog) =>( peut resoudre le probleme de mapping
                blogs_1.map( (blog) =>(
                    <div className="blog" key={blog.id}>
                        <Link to={`/blog/${blog.id}`} className="blog-titre">{blog.title}</Link>
                        <small className="blog-publication-date"> {blog.date}</small>
                        <p className="blog-author">{blog.author}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Bloglist;
