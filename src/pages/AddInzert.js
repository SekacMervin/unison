
//// Import packages
import React from "react";
import { useState } from "react";
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
import { Tree } from "react-bootstrap-icons";



//// Function
const AddInzert = () => 
{
    const [text, setText] = useState("");
    const [lengthText, setLengthText] = useState(0);
    const [textLabel, setTextLabel] = useState("Text inzerátu (500/0)");
    const [code,setCode] = useState(Math.floor(Math.random()*(1000-100)+100));
    const [section,setSection] = useState("");
    const [post,setPost] = useState("");
    const [photo1, setPhoto1] = useState("");
    const [photo2, setPhoto2] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [checkCode, setCheckCode] = useState();


    // Nastaveni textu
    const TextChange = (event) =>
    {
        setText(event.target.value);
        setLengthText(event.target.value.length)
        setTextLabel(`Text inzerátu (500/${event.target.value.length})`);
    }

    // Nastaveni rubriky
    const SectionChange = (event) =>
    {
        setSection(event.target.value);
    }

    // Nastaveni zverejneni
    const PostChange = (event) =>
    {
        setPost(event.target.value);
    }

    // Nastaveni fotografie 1
    const Photo1Change = (event) =>
    {
        const file = event.target.files[0];
        setPhoto1(file);
        console.log(photo1);
    }

    // Nastaveni fotografie 2
    const Photo2Change = (event) =>
    {
        setPhoto2(event.target.value);
    }

    // Nastaveni krestnyho jmena
    const FirstNameChange = (event) =>
    {
        setFirstName(event.target.value);
    }

    // Nastaveni prijmeni 
    const LastNameChange = (event) =>
    {
        setLastName(event.target.value);
    }

    // Nastaveni telefoniho cisla
    const TelephoneNumberChange = (event) =>
    {
        setTelephoneNumber(event.target.value);
    }

    // Nastaveni emailu
    const EmailChange = (event) =>
    {
        setEmail(event.target.value);
    }

    // Nastaveni ulice
    const StreetChange = (event) =>
    {
        setStreet(event.target.value);
    }

    // Nastaveni PSC
    const ZipCodeChange = (event) =>
    {
        setZipCode(event.target.value);
    }

    // Nastaveni mesta
    const CityChange = (event) =>
    {
        setCity(event.target.value);
    }

    // Kontrola kontrolniho kodu
    const CheckCodeChange = (event) =>
    {
        setCheckCode(event.target.value);
    }

    // InzertSubmit (poslani do api)
    const InzertSubmit = async (event) =>
    {
        event.preventDefault();
        if(checkCode == code)
        {
            let sent = window.confirm("Opravdu chcete poslat inzerát?");
            if(sent)
            {
                await AddInzertToDatabase(text,post,section,firstName,lastName,telephoneNumber,email,
                    street,city,zipCode);
                document.getElementById('checkboxAgree').click();
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
                                    onChange={SectionChange}
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
                                    onChange={PostChange}
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
                                    <input hidden accept="image/*" type="file" onChange={Photo1Change}/>
                                </Button>  
                            </Stack>
                        </List>
                        <List style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Button variant="contained" component="label" size="small">
                                    Fotografie 2
                                    <input hidden accept="image/*" type="file" onChange={Photo2Change}/>
                                </Button>   
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
                                        onChange={FirstNameChange}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="Příjmení" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}} 
                                        required
                                        onChange={LastNameChange}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField id="outlined-basic" 
                                        size="small" 
                                        label="Telefon" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}}
                                        required
                                        onChange={TelephoneNumberChange}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="E-mail" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}}
                                        required
                                        onChange={EmailChange}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="Ulice" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}}
                                        required
                                        onChange={StreetChange}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="Město"
                                        variant="outlined" 
                                        style={{backgroundColor: "white", minWidth: "325px"}}
                                        required
                                        onChange={CityChange}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "20px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="PSČ" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", width: "150px"}}
                                        required
                                        onChange={ZipCodeChange}
                            />
                        </ListItem>
                        <ListItem style={{margin: "0px", padding: "0px",  marginBottom: "30px"}}>
                            <TextField  id="outlined-basic" 
                                        size="small" 
                                        label="Kontrolní kód **" 
                                        variant="outlined" 
                                        style={{backgroundColor: "white", width: "150px"}}
                                        required
                                        onChange={CheckCodeChange}
                            />
                        </ListItem>
                    </List>
                    <div className="addInzert-text-normal">
                        ** Před odesláním vyplňte tento kód: <b>{code}</b> (slouží k ochraně proti&nbsp;
                         <a href="https://cs.wikipedia.org/wiki/Koment%C3%A1%C5%99ov%C3%BD_spam" target="_blank">
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
const AddInzertToDatabase = async (text,post,selection,firstName,lastName,
    telephoneNumber,email,street,city,zipCode) =>
{
    try
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  "selection": selection, 
                                    "post": post, 
                                    "text": text, 
                                    "userId": 14,
                                    "FirstName": firstName,
                                    "LastName": lastName,
                                    "TelefonNumber": telephoneNumber,
                                    "Email": email,
                                    "Street": street,
                                    "City": city,
                                    "ZipCode": parseInt(zipCode)
                                })
        };
        console.log(requestOptions);
    
        const response = await fetch('https://localhost:7020/api/inzert', requestOptions);
    
        if(!response.ok)
        {
            throw new Error("Network response was not ok");
        }
        else
        {
            alert("Inzerat uspesne pridan do databaze.");
        }
    
        const data = await response.json();
        console.log(data);
    }
    catch(Error)
    {
        console.log(`There was a problem with the fetch operation:', Error message: ${Error}`);
        alert(`There was a problem with the fetch operation:', Error message: ${Error}`);
    }
    
}