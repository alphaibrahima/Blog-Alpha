import { Link } from "react-router-dom";
const NotFound = () => {

    return ( 
        <div>
            <h5>Oooooooooooooooooooooooops</h5>
            <p>La page recherché n'existe....</p>
            <Link to={'/'}> Rendez-vous sur cette merveille</Link>
        </div>
     );
}
 
export default NotFound;