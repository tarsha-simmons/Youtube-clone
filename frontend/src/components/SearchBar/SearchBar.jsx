import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";



let initvalues = {
    title: ""
}

const SearchBar = (props) => {
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues)

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    title:{""}
                    <input
                    type="text" 
                    name="title" 
                    value={formData.title}
                    onChange={handleInputChange}
                    />    
                </label>
            </div>
            <button type='submit'>Search</button>
        </form>
    );
}
 
export default SearchBar;