import React, { useContext, useState } from 'react';
import { Api } from '../../App';

function EverythingSearchBox() {
    
    let {setQu} = useContext(Api);
    let [value, setvalue] = useState('');

    function submit(e) {
        e.preventDefault()
        setQu(value)
    }

    return (
        <>

            <form className="d-flex mx-lg-auto mt-2 mt-lg-0">
                <input className="form-control" onChange={(e) => setvalue(e.target.value)} value={value} type="search" placeholder="Search" aria-label="Search" />
                <button className="btn" onClick={(e)=> submit(e)} type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
            </form>

        </>
    );
}

export default EverythingSearchBox;
