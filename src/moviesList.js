import { Box, Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from "@mui/material";

const MoviesList = ({ movies }) => {
    return (
        <Container sx={{margin:{xs:0,sm:2,md:3}}}>
 <div className="movies-list container">
 
{/* {movies.map((movie) => (
    <div className="movie-box " key={movie.imdID}>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x250'} alt={movie.Title} />
        <div className="info"><span>{movie.Type}</span>
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
        </div>
    </div>
))} */}

<Box sx={{display:"flex",justifyContent:"center", margin:'auto'}}>
<Grid container rowSpacing={2} spacing={{sm:2,md:2,xs:1}} sx={{display:"flex",justifyContent:"center"}}>
{movies.map((movie)=>(
    <Grid item key={movie.imdID}  >
        <Card sx={{ width:{sm:200,xs:150,md:200},height:{sm:400,md:400,xs:325},background:'transparent'}}>
            <CardMedia sx={{width:200,display:{sm:"flex",md:"flex",xs:"none"}}}><img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x250'} alt={movie.Title} width={200} height={250}/></CardMedia>

            <CardMedia sx={{width:150,display:{sm:"none",md:"none",xs:"flex"}}}><img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x200'} alt={movie.Title} width={150} height={200}/></CardMedia>

            <CardContent>
                <Box>
                    <Typography variant="body2" sx={{color:"white"}}>{movie.Type}</Typography>
                    <Typography variant="body1" sx={{color:"white",fontWeight:'bold',fontSize:{sm:"smaller",xs:"x-small",md:"small"}}}>{movie.Title}</Typography>
                    <Typography variant="caption" sx={{color:"white"}}>{movie.Year}</Typography>
        </Box>
        </CardContent>
        </Card>

    </Grid>
    ))}
</Grid>
</Box>


</div>
        </Container>
       
    );
}

export default MoviesList;