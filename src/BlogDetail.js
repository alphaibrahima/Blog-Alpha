import { useParams } from "react-router-dom";
import useRecovery from "./useRecovery";

const BlogDetail = () => {
    const {id} = useParams();
    const {data : blog, isLoading, error} = useRecovery('http://localhost:8000/blogs/'+id);
    return ( 
        <div className="blog-detail">
            {isLoading && <div>En cours de traitement...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div className="blof-detail">
                    <h2 className="blog-titre"> {blog.title} </h2>
                    <small className="blog-publicatio-date"> {`Publié le ${blog.date}`} </small>
                    <p className="blog-body"> {blog.body} </p>
                    <p className="blog-author">{`Publié par ${blog.author}`}</p>
                </div>
            )}

        </div>
     );
}
 
export default BlogDetail;