import React, { useState } from "react";

import "./SearchBar.css"


const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState("")


    return ( 
        <form className="m-2">
                <input type="text" placeholder="Search Terms" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}}/>
                <Link to={`/search/${searchTerm}`}> 
                    <PlayBtn color="white" className="button red-text pr-3 m-1" size={48} type="submit"></PlayBtn>
                </Link>
        </form>
     );
}
 
export default SearchBar;
