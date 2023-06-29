import { Button, Container, Typography } from '@mui/material'
import { useState } from 'react'
// import { FaSearch } from 'react-icons/fa'
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover';

const SerchArea = () => {
    const [searchTerm, setSearchTerm] = useState()
    const navigate = useNavigate()
    const handleKeyDown=(e)=>{
    
if(e.code=== "Enter"){
    setSearchTerm(e.target.value);
    navigate(`/home/${searchTerm}`);
}
    }
    return (
        <Container className="searchArea" sx={{display:"flex"}} >
            {/* <div> */}
            <input type="text"
                placeholder="Search for movie"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                // style={}
            />
            <Link to={`/home/${searchTerm}`}>
                <SearchIcon sx={{mt:"10px",color:"rgb(211, 146, 123)",zIndex:"-1",bgcolor:"rgb(146, 94, 53)",borderRadius:"30px",padding:"10px"}}/>
            </Link>
        </Container>
    );
}

export default SerchArea;

