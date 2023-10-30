import React, { useState, useContext, useEffect } from 'react';
import HeadlineNavigate from './HeadlineNavigate';
import EverythingSearchBox from './EverythingSearchBox';
import { Api } from '../../App';

function Navbar() {
    
    let { openHeadline , setOpenHeadline , setUrl , cat , qu} = useContext(Api)
    let [ openMenu , setOpenMenu ] = useState(false)

    useEffect(()=>{
        setURL()
    } , [openHeadline , cat , qu])

    function setURL() {
        openHeadline ? setUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=b01f7549482f487ba0b83f5bc98d6b0d`) : setUrl(`https://newsapi.org/v2/everything?q=${qu}&apiKey=b01f7549482f487ba0b83f5bc98d6b0d`)
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-cobalt sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex" href="#"><img className='news-icon' src="newspaper.png" alt="newspaper.png" /><h2 className='fw-bold fs-1'>News App</h2></a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <div className='menu-btn px-1' onClick={()=> openMenu ? setOpenMenu(false) : setOpenMenu(true)}>
                                <div className={`bars ${openMenu ? 'upper-bar' : '' }`}></div>
                                <div className={`bars ${openMenu ? 'middle-bar' : '' }`}></div>
                                <div className={`bars ${openMenu ? 'lower-bar' : '' }`}></div>
                            </div>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
                        <div className='d-block d-lg-none'>
                            <ul className='navbar-nav flex-row'>
                                <li className='nav-item me-1' onClick={()=>{setOpenHeadline(true)}}><a className={`nav-link text-light fs-5 py-1 px-2 ${openHeadline ? 'text-cobalt fw-bold bg-light rounded' : ''}`} href="#"> Top Headline </a></li>
                                <li className='nav-item' onClick={()=>{setOpenHeadline(false)}}><a className={`nav-link text-light fs-5 py-1 px-2 ${ !openHeadline ? 'text-cobalt fw-bold bg-light rounded' : ''}`} href="#"> Everything </a></li>
                            </ul>
                        </div>
                        {openHeadline ? <HeadlineNavigate /> : <EverythingSearchBox />}
                        <div className='d-none d-lg-block'>
                            <ul className='navbar-nav'>
                                <li className='nav-item text-center' onClick={()=>{setOpenHeadline(true)}}><a className={`nav-link text-light fs-5 py-1 ${openHeadline ? 'text-cobalt fw-bold bg-light rounded' : ''}`} href="#"> Top Headline </a></li>
                                <li className='nav-item text-center' onClick={()=>{setOpenHeadline(false)}}><a className={`nav-link text-light fs-5 py-1 ${ !openHeadline ? 'text-cobalt fw-bold bg-light rounded' : ''}`} href="#"> Everything </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    );
}

export default Navbar;