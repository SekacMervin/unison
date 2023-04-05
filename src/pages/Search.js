
//// Import packages
import React from "react";
import { useState, useEffect} from "react";
import styles from "../Styles/Styles.scss";

// Components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from "@mui/material";
import FormControl from '@mui/material/FormControl';

// List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// Icons
//import SendIcon from '@mui/icons-material/Send';
import {Search as SearchIcon}  from 'react-bootstrap-icons'


//// Function
const Search = () => 
{
    const [inzerts, setInzerts] = useState([]);
    const [inzertInfo,setInzertInfo] = useState(
        {
            text: "",
            selection: null,
            post: null,
        }
    );
    
    const GetInzerts = async (event) =>
    {
        event.preventDefault();
        const inzertData = await SearchInzertsFromDatabase(inzertInfo);
        setInzerts(inzertData);
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
                    Hledat
                </h3>
                <hr></hr>
                <form onSubmit={GetInzerts}>
                    <div className="inzerts-search">
                        <List>
                            <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                                <TextField  id="outlined-basic" 
                                            size="small" 
                                            label="Text" 
                                            variant="outlined"
                                            required
                                            style={{backgroundColor: "white", minWidth: "325px"}}
                                            onChange={(e)=>{setInzertInfo({...inzertInfo,["text"]:e.target.value})}}
                                />
                            </ListItem>
                            <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                                <FormControl sx={{ m: 1, minWidth: 325, margin: 0}} size="small">
                                    <InputLabel id="demo-select-small">Rubrika</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        label="Rubrika"
                                        style={{backgroundColor: "white", margin: "0px"}}
                                        onChange={(e)=>{setInzertInfo({...inzertInfo,["selection"]:e.target.value})}}
                                        >
                                        <MenuItem value={0}>Prodám</MenuItem>
                                        <MenuItem value={1}>Koupím</MenuItem>
                                        <MenuItem value={2}>Ostatní</MenuItem>
                                        <MenuItem value={null}>None</MenuItem>     
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem style={{margin: "0px", padding: "0px", marginBottom: "20px"}}>
                                <FormControl sx={{ m: 1, minWidth: 325, margin: 0}} size="small">
                                    <InputLabel id="demo-select-small">Zveřejneno</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        label="Zveřejneno"
                                        style={{backgroundColor: "white", margin: "0px"}}
                                        onChange={(e)=>{setInzertInfo({...inzertInfo,["post"]:e.target.value})}}
                                        >
                                        <MenuItem value={0}>Inzert Vlašim a Unison Inzert Benešov</MenuItem>
                                        <MenuItem value={1}>Inzert Vlašim</MenuItem>
                                        <MenuItem value={2}>Unison Inzert Benešov</MenuItem>
                                        <MenuItem value={null}>None</MenuItem>                          
                                    </Select>
                                </FormControl>
                            </ListItem>
                        </List>
                        <Button type="submit" 
                                variant="contained" 
                                endIcon={<SearchIcon />}
                            >
                            hledat
                        </Button>
                    </div>
                </form>
                <br></br>
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
                                        width={300}
                                        height={300}
                                        onClick={() => FullScreenImage(`data:image/jpeg;base64,${ inzert.imageArray_1}`)}
                                    >
                                    </img>
                                </li>
                                <li>
                                    <img
                                        src={`data:image/jpeg;base64,${ inzert.imageArray_2}`}
                                        title="photo_2"
                                        width={300}
                                        height={300}
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

export default Search;



/// 
const SearchInzertsFromDatabase = async (inzertSearchCriteria) =>
{
    try
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inzertSearchCriteria)
        };
        const response = await fetch("https://localhost:7020/api/inzert/search",requestOptions);
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