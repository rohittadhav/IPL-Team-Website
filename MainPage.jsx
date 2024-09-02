import React, { useState } from 'react'
import Team from './teams'
import MumbaiIndians from './MumbaiIndians';
import RoyalChallangerBangluru from './RoyalChallangerBangluru';
import DelhiCapitals from './DelhiCaptials';
import KolkataKnightRiders from './KolkataKnightRiders';
import ChennaiSuperKings from './ChennaiSuperKings';
import GujratTitans from './GujratTitans';
import RajsthanRoyals from './RajsthanRoyals';
import LucknowSuperGiants from './LucknowSuperGiants';
import SunrisersHyderabad from './SunrisersHyderabad';
import PunjabKings from './PunjabKings';

const MainPage = () => {

    const [team, setTeam] = useState(Team);
    const [selectedTeam, setSelectedTeam] = useState();

    const filterTeam = (teamName) => {
        let updateTeam = Team.filter((name1) => {
            return name1.name == teamName;
        })
        setTeam(updateTeam);
    }

    const viewTeam = (name) => {
        setSelectedTeam(name);
    } 

    const renderTeamPage = () => {
        switch (selectedTeam) {
            case 'mi':
                return <MumbaiIndians/>
            
            case 'rcb':
                return <RoyalChallangerBangluru/>

            case 'dc':
                return <DelhiCapitals/>

            case 'kkr':
                return <KolkataKnightRiders/>
             
            case 'csk':
                return <ChennaiSuperKings/>

            case 'gt':
                return <GujratTitans/>

            case 'rr':
                return <RajsthanRoyals/>

            case 'lsg':
                return <LucknowSuperGiants/>

            case 'srh':
                return <SunrisersHyderabad/>

            case 'pk':
                return <PunjabKings/>
        
            default:
                return <MainPage/>;
        }
    }
 
    return (
        <>
            {/* Navbar */}
            <div className="container-fluid d-flex text-light flex-wrap justify-content-around align-items-center p-3 fixed-top" style={{ background: "linear-gradient(93.2deg, rgba(12,47,123,1) 14.4%, rgba(13,34,83,1) 90.8%)"}}>
                <img className='img-fluid me-5' src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png" alt="" height={100} width={100}/>
                <h2 className='ms-5'>TATA INDIAN PREMIER LEAGUE (IPL) 2024</h2>
                <div className="d-flex flex-wrap justify-content-around align-items-center">
                    <button className='btn btn-light ms-4'><a className='text-decoration-none text-dark' href="#">Home</a></button>
                    <button className='btn btn-light ms-4' onClick={() => setTeam(Team)}><a className='text-decoration-none text-dark' href="#">View Teams</a></button>
                    <button className='btn btn-light ms-4'><a className='text-decoration-none text-dark' href="https://www.iplt20.com/" target='_blank'>About IPL</a></button>
                </div>
            </div>

            {/* Team Page Render */}
            {
                selectedTeam ? 
                (renderTeamPage()) 
                : 
                (
                    <>
                    <div style={{ height: '80px' }}></div>
                    <div className="container-fluid d-flex flex-wrap justify-content-center mt-4">
                        <button onClick={() => {setTeam(Team)}} className='btn btn-dark text-light'>ALL TEAMS</button>
                        <button onClick={() => {filterTeam("mi")}} className='btn text-light ms-5' style={{backgroundColor:"#0057E2"}}>MI</button>
                        <button onClick={() => {filterTeam("rcb")}} className='btn text-light ms-5' style={{backgroundColor:"#DC0032"}}>RCB</button>
                        <button onClick={() => {filterTeam("dc")}} className='btn text-light ms-5' style={{backgroundColor:"#2561AE"}}>DC</button>
                        <button onClick={() => {filterTeam("kkr")}} className='btn text-light ms-5' style={{backgroundColor:"#3A225D"}}>KKR</button>
                        <button onClick={() => {filterTeam("csk")}} className='btn text-dark ms-5' style={{backgroundColor:"#FCCB11"}}>CSK</button>
                        <button onClick={() => {filterTeam("gt")}} className='btn text-light ms-5' style={{backgroundColor:"#1B2133"}}>GT</button>
                        <button onClick={() => {filterTeam("rr")}} className='btn text-light ms-5' style={{backgroundColor:"#AD1F67"}}>RR</button>
                        <button onClick={() => {filterTeam("lsg")}} className='btn text-light ms-5' style={{backgroundColor:"#004B8D"}}>LSG</button>
                        <button onClick={() => {filterTeam("srh")}} className='btn text-light ms-5' style={{backgroundColor:"#EE7429"}}>SRH</button>
                        <button onClick={() => {filterTeam("pk")}} className='btn text-light ms-5' style={{backgroundColor:"#DD1F2D"}}>PK</button>
                    </div>
                    </>
                )
            }

            {
                !selectedTeam && (
                    <div className="container-fluid mt-3 d-flex flex-wrap justify-content-around mb-5">
                    {
                        team.map((cValue) => {
                            let {teamID, teamName, teamLogo, teamOwner, captainName, teamHome, name} = cValue;
                            return (
                                <div className="card bg-light m-3" style={{width:"25%"}} key={teamID}>
                                    <h5 className="card-header text-center fw-bold p-3 bg-dark text-light">{teamName}</h5>
                                    <div className="d-flex justify-content-center">
                                        <img src={teamLogo} className='card-img-top mt-2' alt="" style={{ width: "50%", height: "auto" }} />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title fw-bold fs-5 text-center">Team Details</div>
                                            <table className='table'>
                                                <tr>
                                                    <td className='fw-bold'>Team ID :</td>
                                                    <td>{teamID}</td>
                                                </tr>
                                                <tr>
                                                    <td className='fw-bold'>Team Owner:</td>
                                                    <td>{teamOwner}</td>
                                                </tr>
                                                <tr>
                                                    <td className='fw-bold'>Home Ground:</td>
                                                    <td>{teamHome}</td>
                                                </tr>
                                                <tr>
                                                    <td className='fw-bold'>Team Captain:</td>
                                                    <td>{captainName}</td>
                                                </tr>
                                            </table>
                                    </div>
                                    <div className="card-footer text-center py-2 bg-dark text-light">
                                        <button className='btn btn-outline-light' onClick={() => viewTeam(name)}>View Team</button>
                                    </div>
                                </div>
                                )
                            })
                    }
                    </div>
                )
            }
            {/* Footer */}
            <div className='footer container-fluid bg-dark text-light p-3'>
                <div className='d-flex flex-wrap'>
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{width: "150px"}}>
                        <span style={{color:"wheat"}}>TITLE SPONSOR</span>
                        <a href="https://www.tata.com/" target='_blank'>
                            <img src="https://www.iplt20.com/assets/images/new-sponsor-tata-logo.svg" alt="" height={120} width={120} />
                        </a>
                    </div>
                    
                    <div style={{ borderLeft: "2px solid wheat", height: "160px", marginLeft: "20px", marginRight: "20px", marginTop: "5px" }}></div>
                    
                    <div className='d-flex flex-wrap flex-column justify-content-center align-items-center'>
                        <span style={{color:"wheat"}}>ASSOCIATE PARTNER</span>
                        <div className='d-flex flex-wrap'>
                            <a href="https://www.my11circle.com/">
                                <img src="https://www.iplt20.com/assets/images/new-sponsor-my11circle-logo.svg" alt="" height={120} width={120} />
                            </a>
                            <a className='ms-2' href="https://www.angelone.in/">
                                <img src="https://www.iplt20.com/assets/images/new-sponsor-angelone-logo.svg" alt="" height={120} width={120} />
                            </a>
                            <a className='ms-2' href="https://www.rupay.co.in/">
                                <img src="https://www.iplt20.com/assets/images/new-sponsor-rupay-logo.svg" alt="" height={120} width={120} />
                            </a>
                        </div>
                    </div>

                    <div style={{ borderLeft: "2px solid wheat", height: "160px", marginLeft: "20px", marginRight: "20px", marginTop: "5px" }}></div>
                        
                    <div className='d-flex flex-wrap flex-column justify-content-center align-items-center' style={{width: "200px"}}>
                            <span style={{color:"wheat"}}>OFFICIAL UMPIRE PARTNER</span>
                            <a href="https://www.wondercement.com/" target='_blank'>
                                <img src="https://www.iplt20.com/assets/images/new-partner-wonder-cement.svg" alt="" height={120} width={120} />
                            </a>
                    </div>

                    <div style={{ borderLeft: "2px solid wheat", height: "160px", marginLeft: "20px", marginRight: "20px", marginTop: "5px" }}></div>
                        <div className='d-flex flex-wrap flex-column justify-content-center align-items-center' style={{width: "150px"}}>
                            <span style={{color:"wheat"}}>OFFICIAL STRATEGIC TIMEOUT PARTNER</span>
                            <a href="https://www.ceat.com/" target='_blank'>
                                <img src="https://www.iplt20.com/assets/images/new-sponsor-ceat-logo.svg" alt="" height={120} width={120} />
                            </a>
                    </div>

                    <div style={{ borderLeft: "2px solid wheat", height: "160px", marginLeft: "20px", marginRight: "20px", marginTop: "5px" }}></div>
                    
                    <div className='d-flex flex-wrap flex-column justify-content-center align-items-center' style={{width: "170px"}}>
                        <span style={{color:"wheat"}}>OFFICIAL BRODCASTER</span>
                        <a href="https://www.hotstar.com/in/home" target='_blank'>
                            <img src="https://www.iplt20.com/assets/images/new-sponsor-start-sports-logo.svg" alt="" height={120} width={120} />
                        </a>
                    </div>

                    <div style={{ borderLeft: "2px solid wheat", height: "160px", marginLeft: "20px", marginRight: "20px", marginTop: "5px" }}></div>
                    
                    <div className='d-flex flex-wrap flex-column justify-content-center align-items-center' style={{width: "230px"}}>
                        <span style={{color:"wheat"}}>DIGITAL STREAMING PARTNER</span>
                        <a href="https://www.jiocinema.com/" target='_blank'>
                            <img src="https://www.iplt20.com/assets/images/new-sponsor-jio-cenema-logo.svg" alt="" height={120} width={120} />
                        </a>
                    </div>

                </div>
            </div>

            <div className=" container-fluid p-3 text-center text-light" style={{backgroundColor:"black"}}>
                Copyright © IPL 2024 All Rights Reserved.
            </div>
        </>
    )
}

export default MainPage;
