import { useState, useEffect } from "react"
import Bloglist from "./Bloglist";



const Home = () => {

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

    const HandleDelete = (id)=>{
       const newBlog = blogs.filter( (blog) => blog.id !== id );
       setBlog(newBlog);
    }

    useEffect( ()=>{
        console.log("on m'a appelé...");
        console.log(blogs);
    });

    return (
        <div className="home">
            <Bloglist blogs_1={blogs} titre={"Liste des Articles"} HandleDelete={HandleDelete}></Bloglist>
        </div>
    );
}
 
export default Home;