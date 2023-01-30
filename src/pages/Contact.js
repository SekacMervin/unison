
//// Import packages
import React from "react";
import { useState } from "react";
import styles from "../Styles/Styles.scss";



//// Function
const Contact = () => 
{
    return(
        <>
            <h3 className="contact-normal">
                Kontakt
            </h3>
            <hr></hr>
            <div className="contact-body">
                <div className="contact-info-segment">
                    <div className="contact-info-segment-text">
                        <h4>
                            Informace o firmě
                        </h4>
                        <p>
                            Naše firma vznikla v roce 1995 se záměrem poskytovat služby v oblasti inzertních, reklamních a grafických prací.<br/>
                            Krátce po vzniku jsme začali vydávat inzertní noviny INZERT Vlašim a o něco později i UNISON Inzert Benešov.<br/>
                            Těmito periodiky jsme pokryli celý bývalý okres Benešov.<br/>
                            Postupem času jsme vzhledem k zájmu o naše inzertní služby i v jiných lokalitách zvýšili efektivní náklad na 18400 ks a rozšířili distribuci  i do měst Zruče nad Sázavou, Votic, Týnce nad Sázavou nebo Poříčí nad Sázavou.
                            <br/><br/>
                            <h6>V tomto roce vychází již 23. ročník našich periodik především díky zájmu našich zákazníků i čtenářů. Děkujeme!</h6>
                        </p>
                    </div>
                </div>
                <div className="contact-info-segment">
                    <div className="contact-info-segment-text">
                        <h4>
                            Kontaky
                        </h4>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact ;