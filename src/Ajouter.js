import { useState } from "react";

const Ajouter = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState();
    const [body, setBody] = useState();

    return ( 
        <div className="create-blog">
            <h2>Ajouter un nouveau article</h2>

            <form  className="form">

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
                        <option value="Tony">Tony</option>
                        <option value="Duplex">Duplex</option>
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
                    <button type="submit" className="btn-create">Creer Article</button>
                </div>

            </form>
            <p>{title}</p>
            <p>{author}</p>
            <p>{body}</p>
        </div>
     );
}
 
export default Ajouter;