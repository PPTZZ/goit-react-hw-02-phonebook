import { Grid2, TextField } from "@mui/material";

const Search = () => {
    
    return(
        <>
        <Grid2 container sx={{
            bgcolor:'red'
        }}>
            <TextField variant="standard" label='Search'/>
        </Grid2>
        </>
    );
};
export default Search;