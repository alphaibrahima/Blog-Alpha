import { useHistory, useParams } from "react-router-dom";
import useRecovery from "./useRecovery";

const BlogDetail = () => {
    const {id} = useParams();
    const history = useHistory()
    const {data : blog, isLoading, error} = useRecovery('http://localhost:8000/blogs/'+id);
    
    const HandleDelete = () => {
        fetch('http://localhost:8000/blogs/'+id, {
            method : 'DELETE'
        }).then( () => {
            console.log('suppression avec succes..');
            history.go(-1)

        })
    }

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
                    <button className="btn-danger" onClick={HandleDelete}>Supprimer</button>
                </div>
            )}

        </div>
     );
}
 
export default BlogDetail;