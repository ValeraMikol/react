import React from 'react';
import loader from '../../../assets/image/loader.svg'



let Preloader = (props) => {
    return(
        <div>
            <img src={loader} alt='#'/>
        </div>
    )
}


export default Preloader;