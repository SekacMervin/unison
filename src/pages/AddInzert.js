
//// Import packages
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from "../Styles/Styles.scss";


//// Function
const AddInzert = () => 
{
    return(
        <>
            <h3>
                Pridani inzeratu
            </h3>
            <hr></hr>
            <TextField multiline auto minRows={5} label="Text inzeratu"></TextField>
            <br></br>
            <Button className="button-moje" variant="outlined" id="neco" >Ahoj</Button>
        </>
    );
};

export default AddInzert;