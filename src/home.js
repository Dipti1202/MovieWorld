import MoviesList from "./moviesList";
import UseFetch from "./useFetch";
import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    const { title } = useParams();
    // if({title}==='')
    // {
    //     const { isPending, error, movie } = UseFetch('marvel');
    //     return (
    //         <div className="home">
    //             {error && <div>{error}</div>}
    //             {isPending && <div className="pending">Loading...</div>}
    //             {movie && <MoviesList movies={movie} />}
    //         </div>
    //     );
    // }
    
    const { isPending, error, movie } = UseFetch(title);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div className="pending">Loading...</div>}
            {movie && <MoviesList movies={movie} />}
        </div>
    );
}

export default Home;