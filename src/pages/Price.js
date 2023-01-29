
//// Import packages
import React from "react";
import { useState } from "react";
import styles from "../Styles/Styles.scss";

// Images
import CenikVlasim from "../Images/ceniky_na_web_vl(1).gif";
import CenikBenesov from "../Images/ceniky_na_web_bn(1).gif";



//// Function
const Price = () => 
{
    return(
        <>
            <h3 className="home-normal">
                Ceník inzerce
            </h3>
            <hr></hr>
            <div className="price-body">
                <div className="price-priceList-segment">
                    <div className="price-priceList-segment-text">
                        <h4>
                            Vlašimsko - ceny pro rok 2022
                        </h4>
                        <img src={CenikVlasim} alt="Cenik_Vlasim" title="Cenik_Vlasim">
                        </img>
                    </div>
                </div>
                <div className="price-priceList-segment">
                    <div className="price-priceList-segment-text">
                        <h4>
                            Benešovsko - ceny pro rok 2022
                        </h4>
                        <img src={CenikBenesov} alt="Cenik_Benesov" title="Cenik_Benesov">
                        </img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Price ;