import { useState, useEffect } from "react";


const useRecovery = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)


    useEffect( () =>{
        // 1- pour regler l'erreur "memory leak in your application."
        const abortConst = new AbortController();

        setTimeout( ()=> {

            fetch(url, { signal: abortConst.signal })
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
                // 3- pour regler l'erreur "memory leak in your application."
                if(err.name === "AbortError")
                {
                    console.log("fetch a ete stoppé..");
                }
                else
                {
                    setError(err.message)
                    setIsLoading(false)
                }

            })
        }, 2000)
        // 2- pour regler l'erreur "memory leak in your application."
        return () => abortConst.abort()

    }, [url])

    return {data, isLoading, error};
}
 
export default useRecovery;