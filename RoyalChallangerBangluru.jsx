import React, { useState } from 'react'
import RCB from './rcb'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const RoyalChallangerBangluru = () => {
    const [rcb, setRcb] = useState(RCB);

    const filterRole = (role) => {
        let updateRole = RCB.filter((pRole) => {
            return pRole.playerRole == role;
        })
        setRcb(updateRole);
    }
  return (
    <>
        <style>
            {
                `.carousel-inner img {
                width: 100%; 
                height: 500px; 
                object-fit: cover; 
                }
                `
            }
        </style>

        <div className="container-fluid bg-dark text-light d-flex flex-wrap justify-content-around align-items-center fixed-top" style={{ backgroundImage: "linear-gradient(147deg, #000000 0%, #eb0505 74%)"}}>
                <img className='img-fluid me-5 p-1' src="https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png" alt="" height={80} width={80}/>
                <h2 className='ms-5'>TATA IPL 2024 - ROYAL CHALLANGERS BANGALURU (RCB)</h2>
                <div className="d-flex flex-wrap justify-content-around align-items-center">
                    <button className='btn btn-dark ms-4'>Home</button>
                    <button className='btn btn-dark ms-4'><a className='text-decoration-none text-light' href="https://www.royalchallengers.com/" target='_blank'>Official Team Site 
                    <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                    </a>
                </button>
                    <button className='btn btn-dark ms-4'><a className='text-decoration-none text-light' href="https://www.iplt20.com/" target='_blank'>About IPL</a></button>
                </div>
        </div>

        <div style={{ height: '80px' }}></div>
        
        <div className="container mt-4 w-75 mb-3">
            <div className="carousel slide" id="captions1" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#captions1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#captions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#captions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#captions1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#captions1" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/19/full/1710865231-6152.jpg?im=FeatureCrop,size=(826,465)" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <button className='btn btn-dark'>
                                RCB Team Jersey Revil
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://pimwp.s3-accelerate.amazonaws.com/2020/08/rcb.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <button className='btn btn-dark'>
                                RCB E-saala Cup Namde
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.mid-day.com/images/images/2024/mar/rcblions_d.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <button className='btn btn-dark'>
                                RCB New Threads
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-05/19/full/1716060163-3405.jpg?im=FeatureCrop,size=(826,465)" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <button className='btn btn-dark'>
                                RCB Match Winning Moment
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.hindustantimes.com/ht-img/img/2024/05/18/550x309/PTI05-18-2024-000456A-0_1716058679202_1716058721799.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <button className='btn btn-dark'>
                                Virat Kohli Celebration
                            </button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#captions1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#captions1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div className="container-fluid d-flex flex-wrap justify-content-center mt-4">
                <button className='btn btn-outline-dark' onClick={() => {setRcb(RCB)}}>ALL TEAM</button>
                <button className='btn btn-outline-dark  ms-5' onClick={() => {filterRole("Batter")}}>BATTERS</button>
                <button className='btn btn-outline-dark  ms-5' onClick={() => {filterRole("Batter-WK")}}>WICKET-KEEPER</button>
                <button className='btn btn-outline-dark  ms-5' onClick={() => {filterRole("Bowler")}}>BOWLERS</button>
                <button className='btn btn-outline-dark  ms-5' onClick={() => {filterRole("All Rounder")}}>ALL ROUNDERS</button>
        </div>

        <div className="container-fluid mt-3 d-flex flex-wrap justify-content-around mt-4 mb-5">
        {
          rcb.map((cPlayer) => {
            let {playerID, playerName, playerImg, playerRole, playerRoleSVG} = cPlayer;
            return (
                <div className="card bg-light m-3" style={{width:"20%"}} key={playerID}>
                    <h5 className="card-header text-center text-light fw-bold p-3 team-rcb-header">Player Details</h5>
                    <div className="d-flex justify-content-center">
                        <img src={playerImg} className='card-img-top mt-2' alt="" style={{ width: "80%", height: "auto" }} />
                    </div>
                    <div className="card-body">
                        <div className="card-title fw-bold fs-5 text-center">
                            <img src={playerRoleSVG} alt="" height={30} width={30} />
                        </div>
                            <ul className="list-group list-group-flush bg-light">
                                <li className="list-group-item fw-bold">Player Name : {playerName}</li>
                                <li className="list-group-item fw-bold">Player Role : {playerRole}</li>
                            </ul>
                    </div>
                </div>
            )
          })
        }
        </div>

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

export default RoyalChallangerBangluru;