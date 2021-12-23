import React,{useState} from 'react'
import crossicon from '../../assets/svg/Cross icon/Cross icon.svg'


function Card(props) {
    return (
        <div>
            <div className="card">
            <div style={{width:'80px',margin: '30px 0 0 auto',cursor:'pointer',overflow:'hidden'}}>{props.btnClicked?<img src={crossicon} onClick={props.handleclose} width="30px" className='globalcrossicon' />:null}</div>
                                
                            <div style={{width:'80%',margin:'0 auto',marginTop:'10px'}}>
                                
                                <div className="cardimg">
                                    <img src={props.cardDetail.imgsrc} width="65px" />
                                </div>
                                <div>
                                    <h4 className="card-head fontsforweb_fontid_9785">{props.cardDetail.head}</h4>
                                    <p className="card-des">{props.cardDetail.para}</p>
                                    {props.cardMoreDetail? <p>{props.cardMoreDetail}</p>:null}
                               {!props.btnClicked? <div className="showOrHide" >
                                    <a onClick={props.cardReadMore} className="card-link">Read More</a>
                                    <p onClick={props.cardReadMore} style={{color:'blue',letterSpacing:'-0.2em',cursor:'pointer'}}>-&gt;</p>
                                </div>:null}
                                </div>
                            </div>
                           
                         
                        </div>
        </div>
    )
}

export default Card
