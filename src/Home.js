import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useRecovery from "./useRecovery";


const Home = () => {

    const {data : blogs, error, isLoading} = useRecovery('http://localhost:8000/blogs')



    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isLoading && <div>En Cours de chargement...</div>}
            {/* <!-- {blogs &&} resout le probleme de mapping--> */}
            { blogs && <Bloglist blogs_1 = {blogs} titre = {'Liste des articles'}/>}
        </div>
    );
}

export default Home;
