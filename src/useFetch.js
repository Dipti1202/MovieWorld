import { useEffect, useState } from 'react';

const API_url = "https://www.omdbapi.com?apikey=7aa2fa38";

const UseFetch = (title) => {
    
    const [isPending,setIsPending]=useState(true)
const [error,setError]=useState(null);
const [movie,setMovie]=useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch(`${API_url}&s=${title}`)
            // fetch(`${API_url}&s=ironman`)
                .then(res => {
                    if(!res.ok){
                        throw Error("Unable to get the results.");
                    }
                    else{
                        // console.log(res.status)
                        setIsPending(false);
                        setError(null);
                        return res.json();
                    }
                    
                })
                .then(data => {
                    
                    setMovie(data.Search);
                    // console.log(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err =>{
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000)
    }, [title])
    return (
        // <div>
        //     {error && <div>{error}</div>}
        //     {isPending && <div>Loading...</div>}
        // </div>
        {isPending,error,movie}
    );
}

export default UseFetch;