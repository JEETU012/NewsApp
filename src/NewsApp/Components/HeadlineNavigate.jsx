import React, { useContext } from 'react';
import { Api } from '../../App';

function HeadlineNavigate() {

    let { cat, setCat } = useContext(Api)

    function handleClick(e) {
        setCat(e.target.innerText.toLowerCase())
    }

    return (
        <>

            <div className='top-headline-nav mx-lg-auto'>
                <ul className="navbar-nav me-auto mt-lg-0 mt-2 mb-lg-0">
                    <li onClick={(e) => handleClick(e)} className="nav-item"><a className={`nav-link py-1 rounded text-light ${cat === 'general' ? 'bg-light fw-bold text-cobalt ps-2' : ''}`} >General</a></li>
                    <li onClick={(e) => handleClick(e)} className="nav-item"><a className={`nav-link py-1 rounded text-light ${cat === 'business' ? 'bg-light fw-bold text-cobalt ps-2' : ''}`} >Business</a></li>
                    <li onClick={(e) => handleClick(e)} className="nav-item"><a className={`nav-link py-1 rounded text-light ${cat === 'entertainment' ? 'bg-light fw-bold text-cobalt ps-2' : ''}`} >Entertainment</a></li>
                    <li onClick={(e) => handleClick(e)} className="nav-item"><a className={`nav-link py-1 rounded text-light ${cat === 'health' ? 'bg-light fw-bold text-cobalt ps-2' : ''}`} >Health</a></li>
                    <li onClick={(e) => handleClick(e)} className="nav-item"><a className={`nav-link py-1 rounded text-light ${cat === 'science' ? 'bg-light fw-bold text-cobalt ps-2' : ''}`} >Science</a></li>
                    <li onClick={(e) => handleClick(e)} className="nav-item"><a className={`nav-link py-1 rounded text-light ${cat === 'sports' ? 'bg-light fw-bold text-cobalt ps-2' : ''}`} >Sports</a></li>
                    <li onClick={(e) => handleClick(e)} className="nav-item"><a className={`nav-link py-1 rounded text-light ${cat === 'technology' ? 'bg-light fw-bold text-cobalt ps-2' : ''}`} >Technology</a></li>
                </ul>
            </div>

        </>
    );
}

export default HeadlineNavigate;