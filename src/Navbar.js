import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">BLOG-ALPHA</Link>
            </div>
            <ul className="liens">
                <li>
                    <Link to="/" className="lien">Accueil</Link>
                </li>
                <li>
                    <Link to="" className="lien">Service</Link>
                </li>
                <li>
                    <Link to="" className="lien">Contact</Link>
                </li>
                <li>
                    <Link to="" className="lien">Blog</Link></li>
                <li>
                    <Link to="/ajouter" className="lien buttonArticle">Publier Article</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;