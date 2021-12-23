import React from 'react'
import './glancecard.css'
function CardGlance(props) {


    return (
        <div className={!props.actClass?"glanceCard glanceCard_nactive":"glanceCard glanceCard_active"}>
            <img className="glancecardImg " src={props.imgsrc} width="77px"/>
            <p className="glancecardtext" style={props.visible?null:{color:'white'}}>{props.text}</p>
        </div>
    )
}

export default CardGlance
