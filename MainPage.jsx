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
import './Style.css'

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

            {/* Navbar */}
            <div className="container-fluid d-flex text-light flex-wrap justify-content-around align-items-center p-3 fixed-top" style={{ background: "linear-gradient(90deg, rgba(26,6,142,1) 10%, rgba(65,0,169,1) 100%, rgba(69,122,252,1) 100%)"}}>
                <img className='img-fluid me-5' src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png" alt="" height={100} width={100}/>
                <h2 className='ms-5'>TATA INDIAN PREMIER LEAGUE (IPL) 2024</h2>
                <div className="d-flex flex-wrap justify-content-around align-items-center">
                    <button className='btn btn-light ms-4'> <a className='text-decoration-none text-dark' href="#home">Home</a></button>
                    <button className='btn btn-light ms-4' onClick={() => setTeam(Team)}> <a className='text-decoration-none text-dark' href="#viewTeam">View Teams</a> </button>
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
                    <div id='home' style={{ height: '80px' }}></div>

                    <div className="container-fluid mt-4 ">
                    <div className="carousel slide" id="captions1" data-bs-ride="carousel" data-bs-interval="3000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="8" aria-label="Slide 9"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="9" aria-label="Slide 10"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="10" aria-label="Slide 11"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="11" aria-label="Slide 12"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="12" aria-label="Slide 13"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="13" aria-label="Slide 14"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="14" aria-label="Slide 15"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="15" aria-label="Slide 16"></button>
                            <button type="button" data-bs-target="#captions1" data-bs-slide-to="16" aria-label="Slide 17"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/Winners/1.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER RR 2008
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/2.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER DC 2009
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/3.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER CSK 2010
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/4.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER CSK 2011
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/5.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER KKR 2012
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/6.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER MI 2013
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/7.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER KKR 2014
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/8.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER MI 2015
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/9.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER SRH 2016
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/10.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER MI 2017
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/11.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER CSK 2018
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/12.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER MI 2019
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/13.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER MI 2020
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/14.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER CSK 2021
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/15.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER GT 2022
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/16.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER CSK 2023
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/Winners/17.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <button className='btn btn-dark'>
                                        IPL WINNER KKR 2024
                                        <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                        </svg>
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

                    <div className="container-fluid d-flex flex-wrap justify-content-center mt-4" id='viewTeam'>
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
                    <div className="container-fluid mt-3 d-flex flex-wrap justify-content-around mb-5 mt-5">
                    {
                        team.map((cValue) => {
                            let {teamID, teamName, teamLogo, teamOwner, captainName, teamHome, name, color} = cValue;
                            return (
                                <div className="card bg-light m-3" style={{width:"25%"}} key={teamID}>
                                    <h5 className="card-header text-center fw-bold p-3 bg-dark text-light" style={{backgroundImage:`${color}`}}>{teamName}</h5>
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
                                        <button className='btn btn-light' onClick={() => viewTeam(name)}>View Team</button>
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
