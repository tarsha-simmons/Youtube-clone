import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = (props) => {


    return ( 
        <div>   
            <h2>Search Page</h2>  
            <SearchBar />  
            <Link to={"/video"}>VideoPage</Link>
        </div>

     );
}
 
export default SearchPage;