
//// Import packages
import React from "react";
import TextField from '@mui/material/TextField';
import styles from "../Styles/Styles.scss";



//// Functions
// Basic input
const GetInput = (props) =>
{
    return(
        <input>Input</input>
    )
}



// Text area
export const GetTextField = (props) =>
{
    return(
        <>
            <TextField id="GetTextField" multiline auto minRows={props.minRows} label={props.label}></TextField>
        </>
    );
}


export default GetInput;