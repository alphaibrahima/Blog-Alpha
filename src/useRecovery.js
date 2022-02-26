import { useState, useEffect } from "react";
const useRecovery = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)


    useEffect( () =>{
        setTimeout( ()=> {

            fetch(url)
            .then( (response) => {
                if(!response.ok){
                    throw Error ("Desolé une erreur est survenue dans le serveur..")
                }
                return response.json();
            })
            .then( (data) => {
                setData(data);
                setIsLoading(false)
            })
            .catch( (err) =>{
                console.log(err.message);
                setError(err.message)
                setIsLoading(false)
            })
        }, 2000)

    }, [url])

    return {data, isLoading, error};
}
 
export default useRecovery;