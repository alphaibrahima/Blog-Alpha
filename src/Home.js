import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";


const Home = () => {

    const [blogs, setBlog] = useState(null);
    useEffect( () =>{
        fetch('http://localhost:8000/blogs')
            .then( (response) => {
                return response.json();
            })
            .then( (data) => {
                setBlog(data);
            })
    }, [])



    return (
        <div className="home">
            <Bloglist blogs_1 = {blogs} titre = {'Liste des articles'}/>
        </div>
    );
}
 
export default Home;