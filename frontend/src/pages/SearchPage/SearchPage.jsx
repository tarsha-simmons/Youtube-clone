import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";

import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = (props) => {


    return ( 
        <div>   
            <h2>Search Page</h2>  
            <SearchBar />  
        </div>

     );
}
 
export default SearchPage;