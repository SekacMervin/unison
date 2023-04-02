
//// Import packages
import React from "react";
import { useState, useEffect } from "react";
import styles from "../Styles/Styles.scss";

import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



//// Function
const Buy = () => 
{
    const [inzerts, setInzerts] = useState([]);
    const [sentRequest, setSentRequest] = useState(true);


    return(
        <>
            <h3 className="contact-normal">
                Koupe
            </h3>
            <hr></hr>
            <div>
                {inzerts.map(inzert =>  <Card   
                                            sx={{ maxWidth: 600 }} 
                                            style={{marginBottom: "50px"}}>
                                            <CardMedia 
                                                sx={{ height: 300}}
                                                image = {`data:image/jpeg;base64,${ inzert.imageArray_1}`}
                                                title = "Obrazek"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Prodam
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {inzert.text}
                                                </Typography>
                                            </CardContent>
                                        </Card>)}
            </div>
        </>
    );
};

export default Buy;