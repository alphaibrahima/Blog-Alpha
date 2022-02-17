const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="">BLOG-ALPHA</a>
            </div>
            <ul className="liens">
                <li>
                    <a href="" className="lien">Accueil</a>
                </li>
                <li>
                    <a href="" className="lien">Service</a>
                </li>
                <li>
                    <a href="" className="lien">Contact</a>
                </li>
                <li>
                    <a href="" className="lien">Blog</a></li>
                <li>
                    <a href="" className="lien buttonArticle">Publier Article</a>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;