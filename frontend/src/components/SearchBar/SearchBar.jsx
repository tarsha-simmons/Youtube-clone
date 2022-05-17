import react from "react";
import useCustomForm from "../../hooks/useCustomForm";


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
                    value={formData.items.snippet.title}
                    onChange={handleInputChange}
                    />    
                </label>
            </div>
            <button type='submit'>Search</button>
    </form>
     );
}
 
export default SearchBar;