import React,{useState} from 'react'



function Card(props) {
    return (
        <div>
            <div className="card">
            <div style={{width:'80px',margin: '30px 0 0 auto',cursor:'pointer'}}>{props.btnClicked?<i onClick={props.handleclose} className="fas fa-times fa-2x"></i>:null}</div>
                                
                            <div style={{width:'80%',margin:'0 auto',marginTop:'20px'}}>
                                
                                <div className="cardimg">
                                    <img src={props.cardDetail.imgsrc} width="65px" />
                                </div>
                                <div>
                                    <h4 className="card-head fontsforweb_fontid_9785">{props.cardDetail.head}</h4>
                                    <p className="card-des">{props.cardDetail.para}</p>
                                    {props.cardMoreDetail? <p>{props.cardMoreDetail}</p>:null}
                               {!props.btnClicked? <div className="showOrHide" style={{}}>
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
