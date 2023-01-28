
//// Import packages
import React from "react";
import { useState } from "react";
import styles from "../Styles/Styles.scss";

// Image
import Panacek from "../Images/panacek.png";



//// Function
const Home = () => 
{
    return(
        <>
            <h3 className="home-normal">
                Inzertní noviny do každé rodiny
            </h3>
            <hr></hr>
            <div className="home-body">
                <div className="home-body-text">
                    <div className="home-info-segment">
                        <div className="home-text-segment">
                            <h4>
                                AKTUÁLNÍ STAV vydání: 
                            </h4>
                            <p>
                                <h6>
                                    UNISON Inzert Benešov č. 01/2023
                                </h6>
                                Distribouván do Vašich schránek.<br/>
                                Rozvážen do odběrních míst.<br/>
                                Zveřejněno na našich www stránkách.<br/>
                                Ke stažení v PDF formátu.<br/>
                                Připravujeme vydání pro Benešovsko na: 18.-19.2.2023<br/>
                            </p>
                        </div>
                    </div>
                    <div className="home-info-segment">
                        <div className="home-text-segment">
                            <h4>
                                POZOR! Rozšířena distribuce do poštovních schránek!
                            </h4>
                            <p>
                                Distribuce do poštovních schránek je od prosince 2013 rozšířena o města Votice a Čerčany!
                            </p>
                        </div>
                    </div>
                    <div className="home-info-segment">
                        <div className="home-text-segment">
                            <h4>
                                INZERT Vlašim
                            </h4>
                            <p>
                                Inzertní čtrnáctideník pro Vlašim, Zruč nad Sázavou, Divišov, Trhový Štěpánov, Načeradec, Čechtice a okolí<br/>
                                Náklad: 7000 ks<br/>
                                Počet stran: 8-16, + přílohy
                            </p>
                        </div>
                    </div>
                    <div className="home-info-segment">
                        <div className="home-text-segment">
                            <h4>
                                UNISON Inzert Benešov
                            </h4>
                            <p>
                                Inzertní čtrnáctideník pro Benešov, Votice, Týnec nad Sázavou, Čerčany, Sázavu a okolí<br/>
                                Náklad: 10400 ks<br/>
                                Počet stran: 8-16, + přílohy
                            </p>
                        </div>
                    </div>
                    <div className="home-info-segment">
                        <div className="home-text-segment">
                            <h4>
                                Společné informace
                            </h4>
                            <p>
                                <h6>Distribuce:</h6>
                                - roznáška do poštovních schránek - zajišťuje Česká pošta<br/>
                                - rozvoz do obchodů
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home-body-other">
                </div>
            </div>
        </>
    )
};

export default Home;