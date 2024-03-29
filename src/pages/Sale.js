
//// Import packages
import React from "react";
import { useState, useEffect} from "react";
import styles from "../Styles/Styles.scss";


//// Function
const Sale = () => 
{
    const [inzerts, setInzerts] = useState([]);
    const [sentRequest, setSentRequest] = useState(true);

    const GetSaleInzerts = async () =>
    {
        const inzertData = await GetSaleInzertsFromDatabase();
        setSentRequest(false);
        setInzerts(inzertData);
    }


    /// Posle dotaz do Api o inzerty typu prodam
    if(sentRequest)
    {
        GetSaleInzerts();
    }


    //// Fotka na full-screen
    const FullScreenImage = (image) =>
    {
        let imgModal = document.getElementById("imgModel");
        let img = document.getElementById("img");
        img.src = image;
        imgModal.style.display = "block";
    }


    const FullScreenImageClose = () =>
    {
        let imgModal = document.getElementById("imgModel");
        let img = document.getElementById("img");
        img.src = null;
        imgModal.style.display = "none";
    }
    

    return(
        <div className="inzerts">
            <h3>
                Prodej
            </h3>
            <hr></hr>
            <div className="inzerts-container">
                {inzerts.map(
                    inzert =>
                    <div key={inzert.id} className="inzerts-container-inzert">
                        <p>
                            {inzert.text}<br/>
                            {inzert.telefonNumber}
                        </p>
                        <ul className="inzerts-container-inzert-images">
                            <li>
                                <img
                                    src={`data:image/jpeg;base64,${ inzert.imageArray_1}`}
                                    title="photo_1"
                                    width={150}
                                    height={150}
                                    onClick={() => FullScreenImage(`data:image/jpeg;base64,${ inzert.imageArray_1}`)}
                                >
                                </img>
                            </li>
                            <li>
                                <img
                                    src={`data:image/jpeg;base64,${ inzert.imageArray_2}`}
                                    title="photo_2"
                                    width={150}
                                    height={150}
                                    onClick={() => FullScreenImage(`data:image/jpeg;base64,${ inzert.imageArray_2}`)}
                                >
                                </img>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="inzerts-modal" id="imgModel">
                <span onClick={() => FullScreenImageClose()} className="inzerts-modal-close">&times;</span>
                <img onClick={() => FullScreenImageClose()}  className="inzerts-modal-content" id="img"></img>
            </div>
        </div>
    );
};

export default Sale;



/// 
const GetSaleInzertsFromDatabase =  async () =>
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
        alert(`There was a problem with the fetch operation:', Error message: ${Error}`);
        return [];
    }
}