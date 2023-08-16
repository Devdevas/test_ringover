import { useState } from "react";
import { SearchBarWrapper } from "./style";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ onSearch }) => {
   const [searchText, setSearchText] = useState("");

   const handleOnChange = (event) => {
      const newSearchText = event.target.value;
      setSearchText(newSearchText);
      onSearch(newSearchText);
   };

   return (
      <SearchBarWrapper>
         <div>
            <FaSearch size={12} style={{ margin: "0 5px" }} />
            <input type="text" placeholder="Rechercher..." value={searchText} onChange={handleOnChange} />
         </div>
      </SearchBarWrapper>
   );
};
