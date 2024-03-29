
//// Import packages
import React, { useEffect } from "react";
import { useState} from "react";
import styles from "../Styles/Styles.scss";

// Components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

// List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// Icons
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';



//// Function
const AddInzert = () => 
{
    const [text, setText] = useState("");
    const [lengthText, setLengthText] = useState(0);
    const [textLabel, setTextLabel] = useState("Text inzerátu (0/500)");
    const [code,setCode] = useState(Math.floor(Math.random()*(1000-100)+100));
    const [checkCode, setCheckCode] = useState();
    const [file_1,setFile_1] = useState ();
    const [file_2,setFile_2] = useState ();
    const [removeFileDiv_1,setRemoveFileDiv_1] = useState ("addInzert-inzert-info-removeFileDiv-hidden");
    const [removeFileDiv_2,setRemoveFileDiv_2] = useState ("addInzert-inzert-info-removeFileDiv-hidden");
    const [inzertInfo,setInzertInfo] = useState(
        {
            text: "",
            selection: null,
            post: null,
            userId: null,
            photo_1: null,
            photo_2: null,
            firstName: "",
            lastName: "",
            telefonNumber: "",
            email: "",
            street: "",
            city: "",
            zipCode: ""
        }
    );
    //useEffect(()=>{console.log(inzertInfo)},[inzertInfo]);


    // Nastaveni textu a label textu
    const TextChange = (event) =>
    {
        setText(event.target.value);
        setLengthText(event.target.value.length);
        setTextLabel(`Text inzerátu (${event.target.value.length}/500)`);
        setInzertInfo({...inzertInfo,["text"]:event.target.value});
    }


    // Nastavuje file (image)
    const SetFile = (event, imageNUmber) =>
    {
        if(imageNUmber === 1)
        {
            setFile_1(event.target.files[0]);
            setRemoveFileDiv_1("addInzert-inzert-info-removeFileDiv");
        }
        else if(imageNUmber === 2)
        {
            setFile_2(event.target.files[0]);
            setRemoveFileDiv_2("addInzert-inzert-info-removeFileDiv");
        }
    }


    // Odstanuje file (image) 
    const ClierFile = (imageNumber) =>
    {
        if(imageNumber === 1)
        {
            let inputElement = document.getElementById("inputFile_1");
            inputElement.files = new DataTransfer().files;
            setFile_1(null);
            setRemoveFileDiv_1("addInzert-inzert-info-removeFileDiv-hidden");
        }
        else if(imageNumber === 2)
        {
            let inputElement = document.getElementById("inputFile_2");
            inputElement.files = new DataTransfer().files;
            setFile_2(null);
            setRemoveFileDiv_2("addInzert-inzert-info-removeFileDiv-hidden");
        }
    }


    // InzertSubmit (poslani do api)
    const InzertSubmit = async (event) =>
    {
        event.preventDefault();
        if(checkCode == code)
        {
            let sent = window.confirm("Opravdu si prejete poslat inzerát?");
            if(sent)
            {
                // Poslani zakladnich dat o inzeratu
                const inzertId = await AddInzertToDatabase(inzertInfo);
                
                let succesFile_1 = true;
                let succesFile_2 = true;

                if(inzertId != false)
                {
                    // Poslani fotografii
                    if(file_1 != null)
                    {
                        succesFile_1 = await AddImageToInzert(inzertId,1,file_1);
                    }

                    if(file_2 != null)
                    {
                        succesFile_2 = await AddImageToInzert(inzertId,2,file_2);
                    }
                }

                document.getElementById('checkboxAgree').click();

                if(inzertId != false && succesFile_1 != null && succesFile_2 != null)
                {
                    alert("Inzerat byl uspesne pridan.");
                }
            }
        }
        else
        {
            alert("Kontrolni bod se neschoduje Vami zadanym kodem!");
        }
    }

    return(
        <>
            <h3 className="addInzert-normal">
                Přidání inzerátu
            </h3>
            <hr></hr>
            <div className="addInzert-text-normal">
                Váš inzerát bude zveřejněn až po kontrole redakcí. Prosíme - nevkládejte inzerát znovu.<br/>
                Zde uveďte kompletní text inzerátu včetně kontaktů.
            </div>
            <form onSubmit={InzertSubmit}>
                <div className="addInzert-textField">
                    <div className="addInzert-textField-body">
                        <TextField  style={{backgroundColor: "white"}} fullWidth required multiline auto 
                                    minRows={7} 
                                    maxRows={10}
                                    inputProps={{ maxLength: 500 }}
                                    label={textLabel}
                                    onChange={TextChange}
                                    >{text}
                        </TextField>
                    </div>
                </div>
                <div className="addInzert-inzert-info">
                    <List>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <FormControl sx={{ m: 1, minWidth: 325, margin: 0}} size="small">
                                <InputLabel id="demo-select-small">Rubrika *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    label="Rubrika *"
                                    required
                                    style={{backgroundColor: "white", margin: "0px"}}
                                    onChange={(e)=>{setInzertInfo({...inzertInfo,["selection"]:e.target.value})}}
                                    >
                                    <MenuItem value={0}>Prodám</MenuItem>
                                    <MenuItem value={1}>Koupím</MenuItem>
                                    <MenuItem value={2}>Ostatní</MenuItem>  
                                </Select>
                            </FormControl>
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px", marginBottom: "20px"}}>
                            <FormControl sx={{ m: 1, minWidth: 325, margin: 0}} size="small">
                                <InputLabel id="demo-select-small">Zveřejnit *</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    label="Zveřejnit *"
                                    required
                                    style={{backgroundColor: "white", margin: "0px"}}
                                    onChange={(e)=>{setInzertInfo({...inzertInfo,["post"]:e.target.value})}}
                                    >
                                    <MenuItem value={0}>Inzert Vlašim a Unison Inzert Benešov</MenuItem>
                                    <MenuItem value={1}>Inzert Vlašim</MenuItem>
                                    <MenuItem value={2}>Unison Inzert Benešov</MenuItem>                             
                                </Select>
                            </FormControl>
                        </ListItem>
                        <List style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Button variant="contained" component="label" size="small">
                                    Fotografie 1
                                    <input id="inputFile_1" hidden accept="image/*" type="file" onChange={(e)=>{SetFile(e,1)}}/>
                                </Button>
                                <div className={removeFileDiv_1}>
                                    <ClearIcon fontSize="medium" className="addInzert-inzert-info-removeFileDiv-icon" onClick={() => ClierFile(1)}></ClearIcon>
                                    <p style={{fontSize: "1em", fontStyle: "italic"}}>{ file_1 != null ? file_1.name : "" }</p>
                                </div>
                            </Stack>
                        </List>
                        <List style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Button variant="contained" component="label" size="small">
                                    Fotografie 2
                                    <input id="inputFile_2" hidden accept="image/*" type="file" onChange={(e)=>{SetFile(e,2)}}/>
                                </Button>
                                <div className={removeFileDiv_2}>
                                    <ClearIcon fontSize="medium" className="addInzert-inzert-info-removeFileDiv-icon" onClick={() => ClierFile(2)}></ClearIcon>
                                    <p style={{fontSize: "1em", fontStyle: "italic"}}>{ file_2 != null ? file_2.name : "" }</p>
                                </div>   
                            </Stack>
                        </List>
                    </List>
                </div>
                <hr></hr>
                <div className="addInzert-text-normal">
                    Informace o Vás (nutné pro přijmutí inzerátu)
                </div>
                <div className="addInzert-user-info">
                    <List>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="Jméno" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}}
                                        required
                                        onChange={(e)=>{setInzertInfo({...inzertInfo,["firstName"]:e.target.value})}}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="Příjmení" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}} 
                                        required
                                        onChange={(e)=>{setInzertInfo({...inzertInfo,["lastName"]:e.target.value})}}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField id="outlined-basic" 
                                        size="small" 
                                        label="Telefon" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}}
                                        required
                                        onChange={(e)=>{setInzertInfo({...inzertInfo,["telefonNumber"]:e.target.value})}}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="E-mail" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}}
                                        required
                                        onChange={(e)=>{setInzertInfo({...inzertInfo,["email"]:e.target.value})}}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="Ulice" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}}
                                        required
                                        onChange={(e)=>{setInzertInfo({...inzertInfo,["street"]:e.target.value})}}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="Město"
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}}
                                        required
                                        onChange={(e)=>{setInzertInfo({...inzertInfo,["city"]:e.target.value})}}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="PSČ" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", width: "150px"}}
                                        required
                                        onChange={(e)=>{setInzertInfo({...inzertInfo,["zipCode"]:e.target.value})}}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "30px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="Kontrolní kód **" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", width: "150px"}}
                                        required
                                        onChange={(e)=>{setCheckCode(e.target.value)}}
                            />
                        </ListItem>
                    </List>
                    <div className="addInzert-text-normal">
                        ** Před odesláním vyplňte tento kód: <b>{code}</b> (slouží k ochraně proti&nbsp;
                         <a href="https://cs.wikipedia.org/wiki/Koment%C3%A1%C5%99ov%C3%BD_spam" target="_blank" rel="noreferrer">
                          komentářovému spamu
                        </a>)
                    </div>
                    <FormControlLabel
                            control={<Checkbox  id="checkboxAgree"
                                                required 
                                                style={{marginLeft: "10px"}}
                                    />} 
                            label=" * Souhlasím s podmínkami serveru a zpracováním osobních údajů" 
                    />
                    <div className="addInzert-sent-button">
                        <Button type="submit" 
                                variant="contained" 
                                endIcon={<SendIcon />}
                            >
                            Poslat inzerát
                        </Button>
                    </div>
                    
                </div>
            </form>
        </>
    );
};

export default AddInzert;



/// Posel dotaz do api o pridani inzeratu do databaze
const AddInzertToDatabase = async (inzertInfo) =>
{
    try
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inzertInfo)
        };
        console.log(requestOptions.body);
    
        const response = await fetch('https://localhost:7020/api/inzert', requestOptions);
    
        if(!response.ok)
        {
            throw new Error("Network response was not ok");
        }
    
        const data = await response.json();
        console.log(data.id);
        return data.id;
    }
    catch(Error)
    {
        console.log(`There was a problem with the fetch operation:', Error message: ${Error}`);
        alert(`There was a problem with the fetch operation:', Error message: ${Error}`);
        return false;
    }
    
}



/// Posel dotaz do api o pridani souboru
const AddImageToInzert = async (inzertId,fileNumber,file) =>
{
    var data = new FormData();
    data.append('file',file);
    console.log(file);

    try
    {
        const requestOptions = {
            method: 'POST',
            body: data
        };
    
        const response = await fetch(`https://localhost:7020/api/inzert/${inzertId}/addFile/${fileNumber}`, requestOptions);
    
        if(!response.ok)
        {
            throw new Error("Network response was not ok");
        }
        return true;
    }
    catch(Error)
    {
        console.log(`There was a problem with the fetch operation:', Error message: ${Error}`);
        alert(`There was a problem with the fetch operation:', Error message: ${Error}`);
        return false;
    }
}