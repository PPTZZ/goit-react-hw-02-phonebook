import { Grid2, TextField } from "@mui/material";
import PropTypes from "prop-types";
const Search = ({onSearchChange}) => {
    
    return(
        <>
        <Grid2 container >
            <TextField variant="standard" label='Search' onChange={onSearchChange}/>
        </Grid2>
        </>
    );
};

Search.propTypes = {
    onSearchChange: PropTypes.func,
  };

export default Search;