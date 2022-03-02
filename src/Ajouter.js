import { useState } from "react";
import { useHistory } from "react-router-dom";


const Ajouter = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState();
    const [body, setBody] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const HandleBlogAdding = (e) =>{
        e.preventDefault();
        const tmp_date = new Date().toISOString().split('T');
        const date = `${tmp_date[0]} ${tmp_date[1]}`;
        const blog = {title, author, body, date};
        setIsLoading(true);

        // etape d'envoi des donne vers le serveur 
        fetch("http://localhost:8000/blogs", {
            method : 'POST',
            headers : { 'content-Type': 'application/json'},
            body : JSON.stringify(blog)
        }
        ).then( () => {
            console.log('Article Ajouter avec succes.');
            setIsLoading(false);
            history.push('/');
    
        })
    }

    return ( 
        <div className="create-blog">
            <h2>Ajouter un nouveau article</h2>

            <form onSubmit={HandleBlogAdding} className="form">

                <div className="form-group">
                    <label htmlFor="title">Titre de l'article</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="title"
                        required 
                        value={title}
                        onChange = { (e) =>setTitle(e.target.value)}
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Selectionez un auteur</label>
                    <select 
                        required 
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={(e) =>setAuthor(e.target.value)}
                        >
                        <option value=""></option>
                        <option value="Alpha">Alpha</option>
                        <option value="Ibans">Ibans</option>
                        <option value="Binta">Binta</option>
                        <option value="Hadjara">Hadjara</option>
                        <option value="Ibrahima">Ibrahima</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="body">Contenu de l'article</label>
                    <textarea 
                    required
                    className="form-control textarea"
                    id="body" rows="10"
                    value={body}
                    onChange={ (e)=>setBody(e.target.value)}
                    ></textarea>
                </div>

                <div className="form-group">
                    {!isLoading && <button type="submit" className="btn-create">Creer Article</button>}
                    {isLoading && <button type="submit" className="btnEncours"
                    >Traitement En Cours</button>}
                </div>

            </form>

        </div>
     );
}
 
export default Ajouter;