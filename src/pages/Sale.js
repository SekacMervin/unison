
//// Import packages
import React from "react";
import { useState, useEffect} from "react";
import styles from "../Styles/Styles.scss";

import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stream } from "@mui/icons-material";



//// Function
const Sale = () => 
{
    const [inzerts, setInzerts] = useState([]);
    const [sentRequest, setSentRequest] = useState(true);

    const GetBuyInzerts = async () =>
    {
        const inzertData = await GetBuyInzertsFromDatabase();
        setSentRequest(false);
        setInzerts(inzertData);
    }


    /// Posle dotaz do Api o inzerty typu prodam
    if(sentRequest)
    {
        GetBuyInzerts();
    }
    
    console.log(inzerts);
    return(
        <>
            <h3 className="contact-normal">
                Prodej
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

export default Sale;



/// 
const GetBuyInzertsFromDatabase =  async () =>
{
    try
    {
        const response = await fetch("https://localhost:7020/api/inzert/selection/0");
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(Error)
    {
        console.error('There was a problem with the fetch operation:', Error);
        return [];
    }
}