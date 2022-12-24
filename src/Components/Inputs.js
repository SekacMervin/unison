
//// Import packages
import React from "react";
//import styles from 'bootstrap/dist/css/bootstrap.css';
//import Form from "react-bootstrap/Form";



//// Functions
// Basic input
const GetInput = (props) =>
{
    return(
        <input>Input</input>
    )
}

// Text area
export const GetTextArea = (props) =>
{
    return(
        <textarea className="form-control" rows={3}>neco tu je?</textarea>
        //<Form.Control className="form-control" as="textarea" row={3}></Form.Control>
    );
}


export default GetInput;