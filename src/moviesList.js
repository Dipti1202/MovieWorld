const MoviesList = ({ movies }) => {
    return (
        <div className="movies-list">

            {movies.map((movie) => (
                <div className="movie-box " key={movie.imdID}>

                    {/* <div className="shadow"></div> */}

                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x250'} alt={movie.Title} />
                    <div className="info"><span>{movie.Type}</span>
                        <h4>{movie.Title}</h4>
                        <p>{movie.Year}</p>
                    </div>
                </div>


            ))}
        </div>
    );
}

export default MoviesList;