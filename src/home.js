import { Box, Container, CssBaseline, Typography } from "@mui/material";
import MoviesList from "./moviesList";
import UseFetch from "./useFetch";
import React from "react";
import { useParams } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Home = () => {
    const { title } = useParams();
    
    const { isPending, error, movie } = UseFetch(title);

    return (
        <Container>
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div className="pending">Loading...</div>}
            {movie && <MoviesList movies={movie} />}
            
            
        </div>
        <Container display="flex" sx={{mt:"20px",padding:"10px"}}>
                <Box >
                    <Typography variant="h2" align="center" sx={{color:"rgb(211, 146, 123)",display:{xs:"none",sm:"block"}}}>MovieWorld</Typography>
                </Box>
                <Box >
                    <Typography variant="body1" color="white" align="center">&copy;copyright </Typography>
                    <Typography variant="body1" color="white" align="center">All rights reserved.</Typography>
                </Box>
                <Box>
                    <Typography variant="body1" align="center" color="rgb(211, 146, 123)">
                        Made with ❤️
                    </Typography>
                </Box>
                
            </Container>
        </Container>
    );
}

export default Home;