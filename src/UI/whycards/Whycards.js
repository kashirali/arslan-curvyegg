import React from 'react'
import './whycards.css'
import rating from '../../assets/svg/Stars.svg'
const Whycards = (props) =>{

    return(
        <div style={{background:props.color}} className='whycards_main'>
            <p>
                    {props.number}
                    {props.sec &&<span>sec</span>}
            </p>
           {props.rating &&<img src={rating} />}
            <p>
                {props.text}
            </p>
        </div>
    );
}

Whycards.defaultProps = {
    number: "82%",
    text:"Average Response Time",
    color:"#0a021d"
}

export default Whycards;