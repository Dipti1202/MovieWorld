import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const ErrorPage = () => {
  return (
    <Container className='error pending'>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}}>
            <Typography variant='h1' className='error-heading'>404</Typography>
            <hr style={{width:"100%"}}/>
            <p>
                You are on the wrong route.. Kindly search for the movies.
            </p>
        </Box>
    </Container>
  )
}

export default ErrorPage