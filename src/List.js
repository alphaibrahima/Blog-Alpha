import { useState, useEffect } from "react"
import Bloglist from "./Bloglist";



const List = () => {

    const [blogs, setBlog] = useState([
        {
            id: 1,
            title : "React.",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi quidem veniam dolores consectetur deleniti non labore odit quam eum.",
            author: "Duplex",
            date: "02/01/2021"
        },
        {
            id: 2,
            title : "Django.",
            body: "Amet consectetur adipisicing elit. Quis modi quidem veniam dolores consectetur deleniti non labore odit quam eum.",
            author: "Alpha",
            date: "02/01/2021"
        },
        {
            id: 3,
            title : "Laravel.",
            body: "Amet consectetur adipisicing elit. Quis modi quidem veniam dolores consectetur deleniti non labore odit quam eum.",
            author: "Alpha",
            date: "02/01/2021"
        },
        {
            id: 4,
            title : "React Native.",
            body: "Amet consectetur adipisicing elit. Quis modi quidem veniam dolores consectetur deleniti non labore odit quam eum.",
            author: "Alpha",
            date: "02/01/2021"
        },
        {
            id: 5,
            title : "Flask.",
            body: "Amet consectetur adipisicing elit. Quis modi quidem veniam dolores consectetur deleniti non labore odit quam eum.",
            author: "Alpha",
            date: "02/01/2021"
        }
    ])

    const [name, setName] = useState('Ibrahima');

    const HandleDelete = (id)=>{
       const newBlog = blogs.filter( (blog) => blog.id !== id );
       setBlog(newBlog);
    }

    useEffect( ()=>{
        console.log("on m'a appelé...");
        console.log(blogs);
    }, [name, HandleDelete]);

    return (
        <div className="list">
            <Bloglist blogs_1={blogs} titre={"Liste des Articles"} HandleDelete={HandleDelete}></Bloglist>
            <br/>
            <button onClick={()=>setName('Amadou')}>Name Change</button>
            <h5>{name}</h5>
        </div>
    );
}
 
export default List;