import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const SerchArea = () => {
    const [searchTerm, setSearchTerm] = useState()
    const nevigate = useNavigate()

    return (
        <div className="searchArea">
            {/* <div> */}
            <input type="text"
                placeholder="Search for movie"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to={`/home/${searchTerm}`}>
                <FaSearch className='icon' />
            </Link>
        </div>
    );
}

export default SerchArea;

